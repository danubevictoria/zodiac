$(document).ready(function (){

	// Store the 12 zodiac signs, the path to their icon file, and the horoscope associated with each zodiac sign
	var zodiac = [
	{
		sign: 'aquarius',
		icon: 'images/PNG/128x128/aquarius.png',
		horoscope: '<b>Strengths:</b> Progressive, original, independent, humanitarian<br>\
		<b>Weaknesses:</b> Runs from emotional expression, temperamental, uncompromising, aloof<br>\
		Aquarius likes: Fun with friends, helping others, fighting for causes, intellectual conversation, a good listener<br>\
		Aquarius dislikes: Limitations, broken promises, being lonely, dull or boring situations, people who disagree with them'
	},

	{
		sign: 'pisces',
		icon: 'images/PNG/128x128/pisces.png',
		horoscope: '<b>Strengths:</b> Compassionate, artistic, intuitive, gentle, wise, musical<br>\
		<b>Weaknesses:</b> Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr<br>\
		Pisces likes: Being alone, sleeping, music, romance, visual media, swimming, spiritual themes<br>\
		Pisces dislikes: Know-it-all, being criticized, the past coming back to haunt, cruelty of any kind'
	},

	{
		sign: 'aries',
		icon: 'images/PNG/128x128/Aries.png',
		horoscope: '<b>Strengths:</b> Courageous, determined, confident, enthusiastic, optimistic, honest, passionate<br>\
		<b>Weaknesses:</b> Impatient, moody, short-tempered, impulsive, aggressive<br>\
		Aries likes: Comfortable clothes, taking on leadership roles, physical challenges, individual sports<br>\
		Aries dislikes: Inactivity, delays, work that does not use one\'s talents'
	},

	{
		sign: 'taurus',
		icon: 'images/PNG/128x128/taurus.png',
		horoscope: '<b>Strengths:</b> Reliable, patient, practical, devoted, responsible, stable<br>\
		<b>Weaknesses:</b> Stubborn, possessive, uncompromising<br>\
		Taurus likes: Gardening, cooking, music, romance, high quality clothes, working with hands<br>\
		Taurus dislikes: Sudden changes, complications, insecurity of any kind, synthetic fabrics'
	},

	{
		sign: 'gemini',
		icon: 'images/PNG/128x128/gemini.png',
		horoscope: '<b>Strengths:</b> Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas<br>\
		<b>Weaknesses:</b> Nervous, inconsistent, indecisive<br>\
		Gemini likes: Music, books, magazines, chats with nearly anyone, short trips around the town<br>\
		Gemini dislikes: Being alone, being confined, repetition and routine'
	},

	{
		sign: 'cancer',
		icon: 'images/PNG/128x128/cancer.png',
		horoscope: '<b>Strengths:</b> Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive<br>\
		<b>Weaknesses:</b> Moody, pessimistic, suspicious, manipulative, insecure<br>\
		Cancer likes: Art, home-based hobbies, relaxing near or in water, helping loved ones, a good meal with friends<br>\
		Cancer dislikes: Strangers, any criticism of Mom, revealing of personal life'
	},

	{
		sign: 'leo',
		icon: 'images/PNG/128x128/leo.png',
		horoscope: '<b>Strengths:</b> Creative, passionate, generous, warm-hearted, cheerful, humorous<br>\
		<b>Weaknesses:</b> Arrogant, stubborn, self-centered, lazy, inflexible<br>\
		Leo likes: Theater, taking holidays, being admired, expensive things, bright colors, fun with friends<br>\
		Leo dislikes: Being ignored, facing difficult reality, not being treated like a king or queen'
	},

	{
		sign: 'virgo',
		icon: 'images/PNG/128x128/virgo.png',
		horoscope: '<b>Strengths:</b> Loyal, analytical, kind, hardworking, practical<br>\
		<b>Weaknesses:</b> Shyness, worry, overly critical of self and others, all work and no play<br>\
		Virgo likes: Animals, healthy food, books, nature, cleanliness<br>\
		Virgo dislikes: Rudeness, asking for help, taking center stage'
	},

	{
		sign: 'libra',
		icon: 'images/PNG/128x128/libra.png',
		horoscope: '<b>Strengths:</b> Cooperative,diplomatic, gracious, fair-minded, social<br>\
		<b>Weaknesses:</b> Indecisive, avoids confrontations, will carry a grudge, self-pity<br>\
		Libra likes: Harmony, gentleness, sharing with others, the outdoors<br>\
		Libra dislikes: Violence, injustice, loudmouths, conformity'
	},

	{
		sign: 'scorpio',
		icon: 'images/PNG/128x128/scorpio.png',
		horoscope: '<b>Strengths:</b> Resourceful, brave, passionate, stubborn, a true friend<br>\
		<b>Weaknesses:</b> Distrusting, jealous, secretive, violent<br>\
		Scorpio likes: Truth, facts, being right, longtime friends, teasing, a grand passion<br>\
		Scorpio dislikes: Dishonesty, revealing secrets, passive people'
	},

	{
		sign: 'SAGITTARIUS',
		icon: 'images/PNG/128x128/SAGITTARIUS.png',
		horoscope: '<b>Strengths:</b> Generous, idealistic, great sense of humor<br>\
		<b>Weaknesses:</b> Promises more than can deliver, very impatient, will say anything no matter how undiplomatic<br>\
		Sagittarius likes: Freedom, travel, philosophy, being outdoors<br>\
		Sagittarius dislikes: Clingy people, being constrained, off-the-wall theories, details'
	},

	{
		sign: 'capricorn',
		icon: 'images/PNG/128x128/capricorn.png',
		horoscope: '<b>Strengths:</b> Responsible, disciplined, self-control, good managers<br>\
		<b>Weaknesses:</b> Know-it-all, unforgiving, condescending, expecting the worst<br>\
		Capricorn likes: Family, tradition, music, understated status, quality craftsmanship<br>\
		Capricorn dislikes: Almost everything at some point'
	}

	]	

	// Retrieve the zodiac information based on what the user inputs
	function retrieve() {

		// Store the user input for zodiac sign
		var user_input = document.getElementById('sign').value;

		if(user_input != null) {
			for (var i = 0; i < zodiac.length; i++) {
				if (zodiac[i].sign.toLowerCase() == user_input.toLowerCase()) {
					return zodiac[i];
				}
			}
		}
	}

	// When the user clicks Submit, get the zodiac information associated with the user's inputted zodiac sign and display it on the screen.
	// If the sign the user inputs can't be found, tell the user to enter a valid zodiac sign
	$('.submit-button').click(function () {

		var zodiac = retrieve();

		if (zodiac != null) {
			var horoscope = zodiac.horoscope;
			var icon = zodiac.icon;

			$('.alert-danger').removeClass('show');
			document.getElementById('horoscope').innerHTML = horoscope;
			document.getElementById('icon').src = icon;
			$('#zodiac').addClass('show');
		} else {
			$('#zodiac').removeClass('show');
			$('.alert-danger').addClass('show');
		}
	})
});