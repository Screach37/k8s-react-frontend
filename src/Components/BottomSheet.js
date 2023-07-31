import { useEffect, useState, useRef } from "react";
// import "./styles.css";
import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";
// import "react-spring-bottom-sheet/dist/style.css";

export default function App() {
  const [open, setOpen] = useState(false);
  const bottomSheetRef = useRef();

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div className="App">
      <button text="open" onClick={() => setOpen(!open)}>
        Toggle
      </button>
      <BottomSheet
        open={open}
        onDismiss={() => {}}
        ref={bottomSheetRef}
        defaultSnap={({ maxHeight }) => maxHeight / 2}
        snapPoints={({ minHeight, maxHeight }) => [
          minHeight + minHeight * 0.1,
          maxHeight - maxHeight / 10,
          maxHeight / 4,
          maxHeight * 0.6
        ]}
      >
        <div>
          <h4>100+ cars</h4>
          <h2 className="fullH">Placeholder for vehicle card</h2>
        </div>
      </BottomSheet>
    </div>
  );
}
