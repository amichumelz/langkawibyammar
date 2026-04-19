// Malaysian public holidays for 2026 (sample, add more as needed)
const malaysiaPublicHolidays2026 = [
  '2026-01-01', // New Year's Day
  '2026-02-19', // Chinese New Year
  '2026-02-20', // Chinese New Year (2nd day)
  '2026-05-01', // Labour Day
  '2026-05-17', // Wesak Day
  '2026-06-01', // Agong's Birthday
  '2026-06-12', // Hari Raya Haji
  '2026-08-31', // Merdeka Day
  '2026-09-16', // Malaysia Day
  '2026-10-20', // Deepavali
  '2026-12-25', // Christmas
  // Add more as needed
];

function isPeakSeason(dateStr) {
  // Peak if date is a public holiday or within 2 days before/after
  const date = new Date(dateStr);
  for (const hol of malaysiaPublicHolidays2026) {
    const holDate = new Date(hol);
    const diff = Math.abs((date - holDate) / (1000 * 60 * 60 * 24));
    if (diff <= 2) return true;
  }
  // Peak for school holidays (example: 24 May - 8 June)
  const schoolHolidays = [
    ['2026-05-24', '2026-06-08'],
    ['2026-11-22', '2026-12-31']
  ];
  for (const [start, end] of schoolHolidays) {
    if (date >= new Date(start) && date <= new Date(end)) return true;
  }
  // Otherwise, low season
  return false;
}
