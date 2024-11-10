//variables

let btn = document.querySelector('#new-quote');
let quote= document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {quote:`"Fortune favors the bold."`,
     person:`Virgil`
    },{quote:`"Courage is not the absence of fear, but the triumph over it"`,
     person:`Nelson Mandela`
       }, {quote:`"The only true wisdom is in knowing you know nothing"`,
        person:`Socrates`
       }, {quote:`"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
        person:`Winston Churchill`
       }, {quote:`"Courage is found in unlikely places."`,
        person:` J.R.R. Tolkien`
       },{quote:`"Courage is resistance to fear, mastery of fear, not absence of fear."`,
        person:`Mark Twain`
       }, {quote:`"The only limit to our realization of tomorrow will be our doubts of today."`,
        person:`Franklin D. Roosevelt`
       }, {quote:`"Honesty is the first chapter in the book of wisdom."`,
        person:`Thomas Jefferson`
       }, {quote:`"Wisdom begins in wonder."`,
        person:`Socrates` }, {quote:`"The fool doth think he is wise, but the wise man knows himself to be a fool."`,
        person : `William Shakespeare`},
        { quote: `"Life is what happens when you're busy making other plans."`, person: `John Lennon` },
        { quote: `"You only live once, but if you do it right, once is enough."`, person: `Mae West` },
        { quote: `"The purpose of our lives is to be happy."`, person: `Dalai Lama` },
        { quote: `"Get busy living or get busy dying."`, person: `Stephen King` },
        { quote: `"You have within you right now, everything you need to deal with whatever the world can throw at you."`, person: `Brian Tracy` },
        { quote: `"Believe you can and you're halfway there."`, person: `Theodore Roosevelt` },
        { quote: `"The only impossible journey is the one you never begin."`, person: `Tony Robbins` },
        { quote: `"Life is really simple, but we insist on making it complicated."`, person: `Confucius` },
        { quote: `"May you live all the days of your life."`, person: `Jonathan Swift` },
        { quote: `"Success is how high you bounce when you hit bottom."`, person: `George S. Patton` },
        { quote: `"In three words I can sum up everything I've learned about life: it goes on."`, person: `Robert Frost` },
        { quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`, person: `Albert Einstein` },
        { quote: `"Never let the fear of striking out keep you from playing the game."`, person: `Babe Ruth` },
        { quote: `"Money and success don’t change people; they merely amplify what is already there."`, person: `Will Smith` },
        { quote: `"Your time is limited, so don't waste it living someone else's life."`, person: `Steve Jobs` },
        { quote: `"Not how long, but how well you have lived is the main thing."`, person: `Seneca` },
        { quote: `"If life were predictable it would cease to be life, and be without flavor."`, person: `Eleanor Roosevelt` },
        { quote: `"The whole secret of a successful life is to find out what is one's destiny to do, and then do it."`, person: `Henry Ford` },
        { quote: `"In the end, it's not the years in your life that count. It's the life in your years."`, person: `Abraham Lincoln` },
        { quote: `"Life is about making an impact, not making an income."`, person: `Kevin Kruse` },
        { quote: `"We cannot solve problems with the kind of thinking we employed when we came up with them."`, person: `Albert Einstein` },
        { quote: `"Learn as if you will live forever, live like you will die tomorrow."`, person: `Mahatma Gandhi` },
        { quote: `"When you change your thoughts, remember to also change your world."`, person: `Norman Vincent Peale` },
        { quote: `"Do what you can with all you have, wherever you are."`, person: `Theodore Roosevelt` },
        { quote: `"It is never too late to be what you might have been."`, person: `George Eliot` },
        { quote: `"Only a life lived for others is a life worthwhile."`, person: `Albert Einstein` },
        { quote: `"The purpose of life is a life of purpose."`, person: `Robert Byrne` },
        { quote: `"Life isn’t about finding yourself. Life is about creating yourself."`, person: `George Bernard Shaw` },
        { quote: `"The best way to predict your future is to create it."`, person: `Peter Drucker` },
        { quote: `"The journey of a thousand miles begins with one step."`, person: `Lao Tzu` },
        { quote: `"Don’t wait. The time will never be just right."`, person: `Napoleon Hill` },
        { quote: `"Act as if what you do makes a difference. It does."`, person: `William James` },
        { quote: `"Success is not final; failure is not fatal: It is the courage to continue that counts."`, person: `Winston Churchill` },
        { quote: `"You define your own life. Don’t let other people write your script."`, person: `Oprah Winfrey` },
        { quote: `"You only pass through this life once, you don’t come back for an encore."`, person: `Elvis Presley` },
        { quote: `"You don’t have to be great to start, but you have to start to be great."`, person: `Zig Ziglar` },
        { quote: `"The harder you work for something, the greater you’ll feel when you achieve it."`, person: `Unknown` },
        { quote: `"You learn more from failure than from success. Don’t let it stop you. Failure builds character."`, person: `Unknown` },
        { quote: `"Dream big and dare to fail."`, person: `Norman Vaughan` },
        { quote: `"Everything you can imagine is real."`, person: `Pablo Picasso` },
        { quote: `"What lies behind us and what lies before us are tiny matters compared to what lies within us."`, person: `Ralph Waldo Emerson` },
        { quote: `"Do not let what you cannot do interfere with what you can do."`, person: `John Wooden` },
        { quote: `"Dream as if you’ll live forever, live as if you’ll die today."`, person: `James Dean` },
        { quote: `"Opportunities don't happen. You create them."`, person: `Chris Grosser` },
        { quote: `"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart."`, person: `Roy T. Bennett` },
        { quote: `"Life is 10% what happens to us and 90% how we react to it."`, person: `Charles R. Swindoll` },
        { quote: `"Your life only gets better when you get better."`, person: `Brian Tracy` },
        { quote: `"Be yourself; everyone else is already taken."`, person: `Oscar Wilde` },
        { quote: `"Life is short, and it is up to you to make it sweet."`, person: `Sarah Louise Delany` },
        { quote: `"Do not take life too seriously. You will never get out of it alive."`, person: `Elbert Hubbard` },
        { quote: `"Live in the sunshine, swim in the sea, drink the wild air."`, person: `Ralph Waldo Emerson`}
];

   btn.addEventListener('click' , function()
   {let random = Math.floor(Math.random() * quotes.length);
   quote.innerText =  quotes[random].quote;

   person.innerText =  quotes[random].person;

   }
);