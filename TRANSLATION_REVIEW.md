# Marathi Translation Review Needed

## Status
- **Date Generated**: 2026-02-20
- **Method**: AI Translation (Claude Sonnet 4.5)
- **Status**: ⚠️ Testing/Development Only - NOT PRODUCTION READY

## Overview

All 15 quiz vignettes have been translated from English to Marathi using AI. These translations are suitable for testing and development purposes but **require professional review by a native Marathi speaker** before production deployment.

## Translation Coverage

| File | Vignettes | Status | Notes |
|------|-----------|--------|-------|
| `src/i18n/locales/mr/questions.json` | 15/15 | ⚠️ AI Generated | Needs native speaker review |

### Translated Vignettes

**Statism Axis (राज्यवाद):**
- ✅ ST_01 - National airline bailout scenario
- ✅ ST_02 - Price controls on essentials
- ✅ ST_03 - Government water provision
- ✅ ST_04 - Land redistribution
- ✅ ST_05 - Individual responsibility (INVERTED)

**Recognition Axis (मान्यता):**
- ✅ RC_01 - University admissions and historical justice
- ✅ RC_02 - Cultural assimilation (INVERTED)
- ✅ RC_03 - Religious symbols in workplace
- ✅ RC_04 - Census data collection (INVERTED)
- ✅ RC_05 - Protest policing and leniency

**SID Axis (संरचनात्मक प्रोत्साहन वितरण):**
- ✅ SID_01 - Contract awarding and personal connections
- ✅ SID_02 - Family loyalty vs law enforcement
- ✅ SID_03 - Electoral district favoritism
- ✅ SID_04 - Using connections for jobs (INVERTED)
- ✅ SID_05 - National interest vs human rights

## Known Limitations

⚠️ **These AI translations may contain:**
- Grammatical inaccuracies or awkward phrasing
- Cultural/political nuance issues
- Inappropriate or inconsistent terminology
- Unnatural sentence structure
- Suboptimal word choices for political context

## Review Checklist

For each vignette, a native Marathi speaker should verify:

### Political Neutrality
- [ ] ST_01: Does not favor government intervention or free market
- [ ] ST_02: Balanced presentation of price controls
- [ ] ST_03: Neutral on public vs private utilities
- [ ] ST_04: No ideological slant on redistribution
- [ ] ST_05: Balanced on individual vs state responsibility
- [ ] RC_01: Unbiased toward affirmative action
- [ ] RC_02: Neutral on assimilation vs diversity
- [ ] RC_03: Balanced on religious expression
- [ ] RC_04: No bias on identity data collection
- [ ] RC_05: Neutral on protest policing
- [ ] SID_01: Equal weight to merit vs connections
- [ ] SID_02: Balanced on family vs law
- [ ] SID_03: Neutral on patronage politics
- [ ] SID_04: Balanced presentation of networking
- [ ] SID_05: Neutral on national interest vs rights

### Language Quality
- [ ] Devanagari spelling is accurate throughout
- [ ] Grammar and syntax are correct
- [ ] Formal tone is maintained (not colloquial)
- [ ] Accessible to educated Marathi readers
- [ ] No awkward or unnatural phrasing
- [ ] Political terminology is appropriate
- [ ] No inappropriate English loanwords
- [ ] Consistent use of key terminology

### Scenario Integrity
- [ ] Same political intent as English version
- [ ] Realistic for Indian political context
- [ ] Similar word count to English (±20%)
- [ ] Clear and easily comprehensible
- [ ] Maintains scenario structure
- [ ] Inverted questions correctly translated

### Technical Verification
- [ ] JSON structure is valid
- [ ] All 15 vignettes render correctly in UI
- [ ] Text fits within UI containers (no overflow)
- [ ] Mobile responsive design works
- [ ] Devanagari characters display properly
- [ ] Likert scale alignment preserved

## Key Terminology Used

The following terminology was used consistently across translations:

| English | Marathi | Context |
|---------|---------|---------|
| Statism | राज्यवाद | State intervention axis |
| Recognition | मान्यता | Group-based rights axis |
| SID | संरचनात्मक प्रोत्साहन वितरण | Resource distribution axis |
| Universalist | सार्वत्रिकतावादी | Rule-based distribution |
| Particularist | विशिष्टतावादी | Identity-based distribution |
| Reservation | आरक्षण | Affirmative action |
| Welfare | कल्याण | Social welfare programs |
| Free market | मुक्त बाजार | Market economy |
| Government intervention | सरकारी हस्तक्षेप | State intervention |

## Translation Approach

**Prompt Engineering:**
- Emphasis on political neutrality
- Formal but accessible Marathi
- Scenario realism for Indian context
- Cultural appropriateness
- Similar word count to English

**Quality Assurance (Needed):**
1. Native Marathi speaker review
2. Political expert validation
3. A/B testing to ensure equivalent scoring
4. User testing with Marathi speakers

## How to Review

If you're a **native Marathi speaker with political knowledge** and want to help review these translations:

1. **Read the English version** in `src/i18n/locales/en/questions.json`
2. **Read the Marathi version** in `src/i18n/locales/mr/questions.json`
3. **Check for issues** using the checklist above
4. **Provide feedback** via:
   - GitHub issue
   - Pull request with corrections
   - Direct contact with maintainer

## Next Steps

### Before Production Deployment

1. ✅ AI translation completed (2026-02-20)
2. ⏳ Find qualified Marathi reviewer
3. ⏳ Complete review using checklist above
4. ⏳ Implement corrections based on feedback
5. ⏳ Re-test in application
6. ⏳ A/B test scoring equivalence
7. ⏳ User testing with Marathi speakers
8. ⏳ Mark as production-ready
9. ⏳ Remove warning banners

### Optional Enhancements

- Add Hindi translations (similar process)
- Consider other regional languages (Tamil, Telugu, Bengali)
- Set up translation management system (Lokalise, Crowdin)
- Create contributor guidelines for community translations

## Test Results

**Date**: 2026-02-20

**Test Suite**: ✅ All 132 tests passing (1 skipped)

**Functional Tests**:
- ✅ JSON structure valid
- ✅ All 15 vignettes load correctly
- ⏳ Devanagari rendering (needs browser testing)
- ⏳ UI container fit (needs browser testing)
- ⏳ Mobile responsive (needs browser testing)

## Contributors

**AI Translation**: Claude Sonnet 4.5 (2026-02-20)

**Awaiting Review**: [Your name here]

---

*This document will be updated as the review process progresses.*
