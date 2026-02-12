// About Page - Methodology and information

import { BookOpen, Target, Database, Shield, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">About Political Nakshatra</h1>
        <p className="text-xl text-gray-400 text-center mb-12">
          राजनीति नक्षत्र - Understanding Indian Politics in 3D
        </p>

        {/* Methodology */}
        <section className="card mb-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="text-blue-400" size={32} />
            <h2 className="text-2xl font-bold text-white">Methodology</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              Political Nakshatra is based on academic research showing that the traditional Western political
              compass (Left-Right economic, Authoritarian-Libertarian social) fails to accurately describe
              Indian political realities.
            </p>
            <p>
              Instead, we use a three-dimensional framework specifically designed for multi-ethnic, post-colonial
              democracies like India:
            </p>
          </div>
        </section>

        {/* Three Axes Detailed */}
        <section className="space-y-6 mb-8">
          {/* Statism */}
          <div className="card border-l-4 border-blue-400">
            <h3 className="text-xl font-bold text-blue-400 mb-3">1. Statism Axis</h3>
            <p className="text-gray-300 mb-4">
              Measures the extent to which the state should dominate and regulate society and economy.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-white mb-2">High Statism</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Government control of key industries</li>
                  <li>• Extensive welfare programs</li>
                  <li>• State-led social transformation</li>
                  <li>• Economic redistribution</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Low Statism</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Market-based solutions</li>
                  <li>• Minimal government intervention</li>
                  <li>• Traditional social autonomy</li>
                  <li>• Private enterprise focus</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recognition */}
          <div className="card border-l-4 border-green-400">
            <h3 className="text-xl font-bold text-green-400 mb-3">2. Recognition Axis</h3>
            <p className="text-gray-300 mb-4">
              Measures support for group-based rights and state accommodation of diverse identities.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-white mb-2">High Recognition</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• SC/ST/OBC reservations</li>
                  <li>• Minority rights protection</li>
                  <li>• Pluralism and diversity</li>
                  <li>• Affirmative action</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Low Recognition</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Uniform national identity</li>
                  <li>• Merit-based systems</li>
                  <li>• Uniform Civil Code advocacy</li>
                  <li>• Anti-reservation stance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SID */}
          <div className="card border-l-4 border-purple-400">
            <h3 className="text-xl font-bold text-purple-400 mb-3">3. SID Axis (Structural Incentive Distribution)</h3>
            <p className="text-gray-300 mb-4">
              Measures whether resources should be distributed through universal rules or particularist networks.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Universalist</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Rule-based distribution</li>
                  <li>• Objective criteria</li>
                  <li>• Transparent processes</li>
                  <li>• Merit and need-based</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Particularist</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Identity network-based</li>
                  <li>• Patronage systems</li>
                  <li>• Community prioritization</li>
                  <li>• Personal connections</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="card mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-green-400" size={32} />
            <h2 className="text-2xl font-bold text-white">How It Works</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <ol className="list-decimal list-inside space-y-3">
              <li>
                <strong>Answer 36 questions</strong> covering all three axes using a 5-point Likert scale
                (Strongly Disagree to Strongly Agree)
              </li>
              <li>
                <strong>Your responses are scored</strong> to calculate your position on each axis,
                with results normalized to a scale from -1 to +1
              </li>
              <li>
                <strong>See your position</strong> plotted as a star in 3D space, representing your
                unique political stance
              </li>
              <li>
                <strong>Compare with parties and leaders</strong> (optional) to see which major Indian
                political parties and individual leaders are closest to your position
              </li>
            </ol>
          </div>
        </section>

        {/* Party Positions */}
        <section className="card mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Database className="text-yellow-400" size={32} />
            <h2 className="text-2xl font-bold text-white">Party Positions</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              Political party positions are estimates based on policy analysis, electoral strategies,
              and governance records. These are not official party positions but academic assessments
              of where parties fall on the three axes.
            </p>
            <p className="text-sm text-gray-400">
              Parties included: BJP, Congress, AAP, BSP, TMC, CPI(M), SP, and DMK.
            </p>
          </div>
        </section>

        {/* Leader Positions */}
        <section className="card mb-8">
          <div className="flex items-center gap-3 mb-4">
            <User className="text-purple-400" size={32} />
            <h2 className="text-2xl font-bold text-white">Leader Positions</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              In addition to political parties, you can compare your position with individual political leaders.
              Leader positions are estimated based on their personal policy record, public statements, and
              governance actions during their tenure.
            </p>
            <p>
              <strong>Why leaders differ from their parties:</strong> A leader's position may differ from their
              party's average position based on their individual emphasis, governance style, and policy priorities.
              For example, a leader might be more statist or less particularist than their party's overall stance.
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-white mb-3">Included Leaders:</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-400">
                <div>
                  <h4 className="font-semibold text-gray-300 mb-2">National Leaders</h4>
                  <ul className="space-y-1">
                    <li>• Narendra Modi (Prime Minister)</li>
                    <li>• Rahul Gandhi (Leader of Opposition)</li>
                    <li>• Arvind Kejriwal (AAP Convener)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-300 mb-2">Regional Leaders</h4>
                  <ul className="space-y-1">
                    <li>• Mamata Banerjee (West Bengal)</li>
                    <li>• M.K. Stalin (Tamil Nadu)</li>
                    <li>• Akhilesh Yadav (Uttar Pradesh)</li>
                    <li>• Mayawati (Bahujan Politics)</li>
                    <li>• Nitish Kumar (Bihar)</li>
                    <li>• Yogi Adityanath (Uttar Pradesh)</li>
                    <li>• Chandrababu Naidu (Andhra Pradesh)</li>
                    <li>• Sharad Pawar (Maharashtra)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-300 mb-2">Cabinet Ministers</h4>
                  <ul className="space-y-1">
                    <li>• Amit Shah (Home Minister)</li>
                    <li>• Rajnath Singh (Defence Minister)</li>
                    <li>• Nirmala Sitharaman (Finance Minister)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-300 mb-2">Historical Figures</h4>
                  <ul className="space-y-1">
                    <li>• Mulayam Singh Yadav (SP Founder)</li>
                    <li>• M. Karunanidhi (DMK Leader)</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Leaders are represented as diamond-shaped (octahedron) markers in the 3D visualization,
              distinct from the spherical party markers. Toggle the "Show Leaders" button on the results
              page to see them.
            </p>
            <p className="text-xs text-gray-500 italic mt-2">
              Note: Leader positions are approximations based on publicly available information and policy
              analysis. They are meant to provide context and comparison, not definitive political categorizations.
            </p>
          </div>
        </section>

        {/* Privacy */}
        <section className="card mb-8 bg-green-900/10 border border-green-700/30">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-green-400" size={32} />
            <h2 className="text-2xl font-bold text-white">Privacy & Data</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              <strong>Your data never leaves your device.</strong> Political Nakshatra runs entirely in your browser.
              Your quiz responses are stored in your browser's local storage and are never sent to any server.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-400">
              <li>No account creation required</li>
              <li>No data collection or tracking</li>
              <li>No cookies or analytics</li>
              <li>Responses stored locally only</li>
              <li>You can clear your data anytime by resetting the quiz</li>
            </ul>
          </div>
        </section>

        {/* Credits */}
        <section className="card mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Credits & Sources</h2>
          <div className="space-y-3 text-gray-300 text-sm">
            <p>
              This framework is based on academic research including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Chhibber & Verma (2018): <em>Ideology and Identity: The Changing Party Systems of India</em></li>
              <li>Kanchan Chandra: <em>Why Ethnic Parties Succeed: Patronage and Ethnic Headcounts in India</em></li>
              <li>Research on caste networks, reservations, and patronage democracy in India</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/quiz"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-all"
          >
            Take the Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}
