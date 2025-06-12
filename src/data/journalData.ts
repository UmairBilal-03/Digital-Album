import { JournalPage } from '../types';
import templeSketch from '../assets/temple-sketch.jpg';
import i1 from '../assets/bench.jpg';
import i2 from '../assets/stare.jpg';
import i3 from '../assets/help.png';
import i4 from '../assets/end.jpg'; // Adjust the path as needed

export const journalPages: JournalPage[] = [
  {
   id: 1,
leftPage: {
  image: templeSketch,
  title: 'Just Us, Then',
  imageAlt: 'A gentle memory of childhood play under soft skies'
},

    rightPage: {
      content: `We were just kids when the story started—small, wild hearts chasing sunlight down narrow streets. You were always there, like a pause between laughter and silence. From my side, every shared moment—every quiet game, every scribbled secret—felt infinite. I don’t know how it felt for you. I still wonder. But I hope, somewhere in your memories too, the light falls softly on those days.`,
      date: 'March 15th'
    }
  },
  {
    id: 2,
    leftPage: {
      image:i1,
      title: 'Time Slipped Quietly',
      imageAlt: 'A girl lost in thought, surrounded by quiet strength.'
    },
    rightPage: {
      content: `As we grew, the rhythm changed. Something subtle settled between us—not conflict, not forgetfulness, just... respect. Like an invisible curtain gently drawn between two familiar actors now rehearsing different roles. We didn’t talk much, didn’t reach out like we used to. Not until fate tossed us both into the same room again, years later, for a university test. And even then, the air between us wasn’t filled with words—but echoes.`,
      date: 'June 22nd'
    }
  },
  {
    id: 3,
    leftPage: {
      image: i2,
      title: 'I Knew It Was You',
      imageAlt: 'A contemplative moment'
    },
    rightPage: {
      content: `I saw you, almost like a ghost folded into the crowd, when your CBT exam was underway. By then, I’d already been at university for a year. You’d taken a pause—something about family circumstances—and then there you were again: poised, focused, unchanged yet unfamiliar. I couldn’t say anything. Couldn’t reach out. But my heart recognized you instantly, even before my mind caught up. You didn’t need me—but even in the smallest way, I tried to help. And through your own strength, you made it in. That day, I didn’t speak to you. But I was proud—silently, entirely.`,
      date: 'May 30th'
    }
  },
  {
    id: 4,
    leftPage: {
      image: i3,
      title: 'A Quiet Collaboration',
      imageAlt: 'A cherished memory'
    },
    rightPage: {
      content: `Maybe it meant little. Maybe it was just a few bugs, a few messages, a few laughs. But for me, helping you—even in small ways—felt special. You brought energy, confidence, and just the right bit of challenge into every line of code we traded. That rhythm, that lightness, made those days feel less heavy. And I was simply happy.`,
      date: 'September 14th'
    }
  },
  {
    id: 5,
    leftPage: {
      image: i4,
      title: 'May Your Chapter Shine',
      imageAlt: 'An eternal moment'
    },
    rightPage: {
      content: `May you find lasting peace and reach the dreams your father once held for you. If I ever caused confusion or hurt, I ask your quiet forgiveness. I never meant to cross a line—only to show admiration, respect, and care.

Perhaps we’ll never share the same page again. But I hold no regret. What we shared—however small—remains one of the most meaningful parts of my story. I only wanted you to know: it mattered.`,
      date: 'Feburary 28th'
    }
  }
];

export const finalLetter = {
  title: "To You, and the One Who Holds Your Hand ...",
  content: `My dearest friend,

If these words reach you, know they are sent with sincerity and care. This is not a letter meant to revisit the past, but to respectfully mark its place—and quietly acknowledge all that it once held.

Ours was never defined by grand gestures or loud presence. Instead, it existed in smaller ways—through kindness, collaboration, and a shared rhythm during a time that, for me, remains quietly valuable. Whether or not it held similar weight for you, I carry gratitude for the way our paths once crossed.

In the moments we exchanged thoughts, solved problems, and moved through shared tasks, I saw resilience, clarity, and a distinct sense of self that earned quiet admiration. Your confidence, even in disagreement, always left an impression.

Now, as you begin a new chapter—with a life partner by your side—I offer my most sincere and respectful wishes. May your days together be steady, your joys shared deeply, and your challenges faced in unity. May your father’s hopes for you live on in your strength, your peace, and your happiness.

If ever there was a moment where my words or actions caused discomfort or misunderstanding, I hope you will receive my apology in good faith. It was never my intention to leave behind anything unresolved.

This letter carries no expectation—only the closure of a chapter written with good intent. You move forward now, and I remain quietly grateful for the part you once played in my story.

Wishing you and your companion a life filled with understanding, purpose, and peace.

With utmost respect, Umair Bilal`
};