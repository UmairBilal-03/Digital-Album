export interface JournalPage {
  id: number;
  leftPage: {
    image: string;
    title: string;
    imageAlt: string;
  };
  rightPage: {
    content: string;
    date?: string;
  };
}

export interface TableItem {
  id: string;
  type: 'feather' | 'inkpot' | 'photo' | 'book' | 'envelope';
  position: {
    x: number;
    y: number;
    rotation: number;
  };
  image?: string;
  size: {
    width: number;
    height: number;
  };
}