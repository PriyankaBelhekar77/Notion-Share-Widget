import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';
import { useEffect, useRef, useState } from 'react';
import ShareWidget from '../shareWidget/ShareWidget';
import { Container } from '../../style/Style';

const KEY_ESC = 'Escape';
const KEY_UP = 'keyup';
const MOUSE_UP = 'mouseup';

function Share() {
  const [showShareWidget, setShowShareWidget] = useState(false);
  const shareWidgetRef = useRef(null);
  const shareBtnRef = useRef(null);

  const handleShareBtnClick = () => {
    setShowShareWidget(!showShareWidget);
  };

  useEffect(() => {
    const handleEscKeyEvent = (event) => {
      if (event.key === KEY_ESC) {
        showShareWidget && setShowShareWidget(false);
      }
    };
    document.addEventListener(KEY_UP, handleEscKeyEvent);

    return () => document.removeEventListener(KEY_UP, handleEscKeyEvent);
  });

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        event.target !== shareBtnRef.current
        && !shareWidgetRef.current?.contains(event.target)
        && event.target.localName !== 'li'
      ) {
        showShareWidget && setShowShareWidget(false);
      }
    };
    document.addEventListener(MOUSE_UP, handleOutsideClick);

    return () => document.removeEventListener(MOUSE_UP, handleOutsideClick);
  });

  return (
    <div className="parent-share-container">
      <Container>
        <Button
          variant="contained"
          endIcon={<ShareIcon />}
          onClick={handleShareBtnClick}
          ref={shareBtnRef}
        >
          Share
        </Button>
        {showShareWidget && <ShareWidget ref={shareWidgetRef} closeWidget={setShowShareWidget} />}
      </Container>
    </div>
  );
}

export default Share;
