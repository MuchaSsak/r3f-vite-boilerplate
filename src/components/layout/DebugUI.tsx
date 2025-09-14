import { Leva } from "leva";

function DebugUI() {
  return (
    <div className="w-[30vw] h-[75vh] overflow-y-scroll fixed right-0 top-0 z-10">
      <Leva
        // TODO: Hide DebugUI
        //   hidden={window.location.hash !== "#debug"}
        oneLineLabels
        titleBar={{ title: "Debug UI 🛠️" }}
        fill
      />
    </div>
  );
}

export default DebugUI;
