/**
 *
 * @returns use different api keys so that we don't exceed 50 request per day limit
 */
export const generateAPI = () => {
	const apiKeys = [
		'hc1zZhuX7Q2pmcQUHttWmHiX5EBQoAr9',
		'irffvn7b0dhhnSEgly9Lx1xzPZPy17BO',
		'oONVDQZC7rvdnSKxZZupk9SLn26GAfiP',
		'aymu63PNSq4yNPxNWX0oQnv428dQR37S',
		'wvGf1FoXXWtGqnJGuYmXPR2ZBggaDDhP',
		'Rx1NHiF1suVawgdomSSjRTn16bzKjNur',
		'l3zAPiqBBcOJrvahaorDQk3XeteSJTpT',
		'iCypZGc713qBlQz7u5MGCyxGWxtJJ65G',
		'LV2DL46DBD7AcrCWOaSR2jkdBG4DpCeO',
		'4phtmhp20JMzlY6dElcnj0DTLPvZtzxN',
		'9jOqN79qKijVUGdbEGdb7yMvKFVNGRgv',
		'd4UDAkHZWOIzPR3EMosaL9JLYp5jdj60',
		'hUOwiRKGkOsEr8Ug5ymHoN7K0kEC2WPP',
		'qXlbPMy8nAQkiKCXBiep0u8hGNdNaBsI',
		'8L5qZGcDG6tAqVGgW3Dh7hNb42d9Lrx2',
		'3tZ9IzYNwWezhOucoAr5iItJP3V8oH0L',
		'Z2v4jossYVIuxbvfu98FL0mmId4McZgY',
		'GDossj9BmWzdbmkUG05XJxuXjpYr1mBO',
		'4FAPGjnt5BGQHPxxr4mNqUywi9y2AADw',
		'eGdnbHN7xTELTe17MDKLloe6VNEZGMjK',
		'20EnGfZm4ju5WHrAVxO7plxazfYSRl6m',
		'r9XILELgvW43T5he93gD46u6JDaEBFaQ',
	];

	return apiKeys[Math.floor(Math.random() * apiKeys.length)];
};
