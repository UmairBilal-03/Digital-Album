import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import TableScene from './components/TableScene';
import JournalBook from './components/JournalBook';
import EnvelopeReveal from './components/EnvelopeReveal';

function App() {
  const [journalOpened, setJournalOpened] = useState(false);
  const [showEnvelope, setShowEnvelope] = useState(false);

  const handleJournalClick = () => {
    setJournalOpened(true);
  };

  const handleJournalClose = () => {
    setJournalOpened(false);
  };

  const handleJournalComplete = () => {
    setJournalOpened(false);
    // Small delay before showing envelope
    setTimeout(() => {
      setShowEnvelope(true);
    }, 1000);
  };

  const handleEnvelopeClose = () => {
    setShowEnvelope(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900">
      {/* Table Scene */}
      <TableScene 
        onJournalClick={handleJournalClick}
        journalOpened={journalOpened}
      />

      {/* Journal Book */}
      <AnimatePresence>
        <JournalBook
          isOpen={journalOpened}
          onClose={handleJournalClose}
          onComplete={handleJournalComplete}
        />
      </AnimatePresence>

      {/* Envelope Reveal */}
      <EnvelopeReveal
        isVisible={showEnvelope}
        onClose={handleEnvelopeClose}
      />

      {/* Ambient Audio (Optional) */}
      {/* <audio autoPlay loop>
        <source src="/ambient-music.mp3" type="audio/mpeg" />
      </audio> */}
    </div>
  );
}

export default App;