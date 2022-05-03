/**
 *
 * @returns api key different every hour so that we don't exceed 50 request per day limit
 */
export const generateAPI = () => {
	const hour = new Date().getHours();

	if (hour < 3) return 'hc1zZhuX7Q2pmcQUHttWmHiX5EBQoAr9';
	if (hour < 6) return 'irffvn7b0dhhnSEgly9Lx1xzPZPy17BO';
	if (hour < 9) return 'Rx1NHiF1suVawgdomSSjRTn16bzKjNur';
	if (hour < 10) return 'l3zAPiqBBcOJrvahaorDQk3XeteSJTpT';
	if (hour < 11) return 'iCypZGc713qBlQz7u5MGCyxGWxtJJ65G';
	if (hour < 12) return 'LV2DL46DBD7AcrCWOaSR2jkdBG4DpCeO';
	if (hour < 13) return '4phtmhp20JMzlY6dElcnj0DTLPvZtzxN';
	if (hour < 14) return '9jOqN79qKijVUGdbEGdb7yMvKFVNGRgv';
	if (hour < 15) return 'd4UDAkHZWOIzPR3EMosaL9JLYp5jdj60';
	if (hour < 18) return 'hUOwiRKGkOsEr8Ug5ymHoN7K0kEC2WPP';
	if (hour < 19) return 'qXlbPMy8nAQkiKCXBiep0u8hGNdNaBsI';
	if (hour < 20) return '8L5qZGcDG6tAqVGgW3Dh7hNb42d9Lrx2';
	if (hour < 21) return '3tZ9IzYNwWezhOucoAr5iItJP3V8oH0L';
	if (hour < 22) return 'Z2v4jossYVIuxbvfu98FL0mmId4McZgY';
	if (hour < 23) return 'GDossj9BmWzdbmkUG05XJxuXjpYr1mBO';
	if (hour < 24) return '4FAPGjnt5BGQHPxxr4mNqUywi9y2AADw';
};
