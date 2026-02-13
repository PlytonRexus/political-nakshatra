// Share Modal - Multiple export and sharing options

import { useState, useRef } from 'react';
import { X, Download, Share2, Copy, FileJson, Link } from 'lucide-react';
import { toPng } from 'html-to-image';
import { ShareableResultsCard } from './ShareableResultsCard';
import { getAxisLabel } from '../../utils/scoring';
import { getPartiesByDistance } from '../../data/parties';
import { calculateDistance, calculateMatchScore } from '../../utils/scoring';
import { encodeResults } from '../../utils/urlSharing';

export function ShareModal({ isOpen, onClose, userPosition }) {
  const [isExporting, setIsExporting] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const cardRef = useRef(null);

  if (!isOpen) return null;

  const partiesWithDistance = getPartiesByDistance(userPosition, calculateDistance);
  const closestParty = partiesWithDistance[0];
  const matchScore = calculateMatchScore(userPosition, closestParty.position);

  const shareText = `My Political Nakshatra position:\n\nStatism: ${getAxisLabel(userPosition.statism, 'statism')}\nRecognition: ${getAxisLabel(userPosition.recognition, 'recognition')}\nSID: ${getAxisLabel(userPosition.sid, 'sid')}\n\nClosest to: ${closestParty.abbreviation} (${matchScore}% match)\n\nTake the quiz: ${window.location.origin}`;

  const handleDownloadImage = async () => {
    if (!cardRef.current) return;

    try {
      setIsExporting(true);
      const dataUrl = await toPng(cardRef.current, {
        quality: 1.0,
        pixelRatio: 2,
        backgroundColor: '#111827'
      });

      const link = document.createElement('a');
      link.download = 'political-nakshatra-results.png';
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Failed to export image:', error);
      alert('Failed to export image. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
      alert('Failed to copy to clipboard');
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Political Nakshatra Results',
          text: shareText,
        });
      } catch (error) {
        console.log('Share cancelled:', error);
      }
    } else {
      alert('Sharing not supported on this device');
    }
  };

  const handleExportJSON = () => {
    const data = {
      position: userPosition,
      closestParty: {
        id: closestParty.id,
        name: closestParty.name,
        abbreviation: closestParty.abbreviation,
        distance: closestParty.distance,
        matchScore: matchScore
      },
      timestamp: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'political-nakshatra-results.json';
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyLink = async () => {
    try {
      const encoded = encodeResults(userPosition);
      const shareUrl = `${window.location.origin}/results?r=${encoded}`;
      await navigator.clipboard.writeText(shareUrl);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy link:', error);
      alert('Failed to copy link to clipboard');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900 border-b border-gray-700 px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-2xl font-bold text-white">Share Your Results</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Preview */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Preview</h3>
            <div className="flex justify-center bg-gray-800 rounded-lg p-6 overflow-x-auto">
              <ShareableResultsCard userPosition={userPosition} cardRef={cardRef} />
            </div>
          </div>

          {/* Sharing Options */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Sharing Options</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Copy Share Link */}
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-3 px-6 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all"
              >
                <Link size={20} />
                <div className="text-left">
                  <div className="font-semibold">
                    {linkCopied ? 'Link Copied!' : 'Copy Share Link'}
                  </div>
                  <div className="text-xs text-purple-200">
                    Anyone with the link can view your results
                  </div>
                </div>
              </button>

              {/* Download Image */}
              <button
                onClick={handleDownloadImage}
                disabled={isExporting}
                className="flex items-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:opacity-50 text-white rounded-lg transition-all"
              >
                <Download size={20} />
                <div className="text-left">
                  <div className="font-semibold">Download Image</div>
                  <div className="text-xs text-blue-200">PNG format, 1200x630px</div>
                </div>
              </button>

              {/* Native Share */}
              {navigator.share && (
                <button
                  onClick={handleNativeShare}
                  className="flex items-center gap-3 px-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all"
                >
                  <Share2 size={20} />
                  <div className="text-left">
                    <div className="font-semibold">Share</div>
                    <div className="text-xs text-green-200">Via system share menu</div>
                  </div>
                </button>
              )}

              {/* Copy Text */}
              <button
                onClick={handleCopyText}
                className="flex items-center gap-3 px-6 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all"
              >
                <Copy size={20} />
                <div className="text-left">
                  <div className="font-semibold">
                    {copySuccess ? 'Copied!' : 'Copy Text'}
                  </div>
                  <div className="text-xs text-purple-200">Copy to clipboard</div>
                </div>
              </button>

              {/* Export JSON */}
              <button
                onClick={handleExportJSON}
                className="flex items-center gap-3 px-6 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all"
              >
                <FileJson size={20} />
                <div className="text-left">
                  <div className="font-semibold">Export JSON</div>
                  <div className="text-xs text-gray-300">For data analysis</div>
                </div>
              </button>
            </div>
          </div>

          {/* Text Preview */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Text Version</h3>
            <div className="bg-gray-800 rounded-lg p-4">
              <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
                {shareText}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
