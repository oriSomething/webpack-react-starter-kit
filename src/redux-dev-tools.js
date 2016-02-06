if (process.env.NODE_ENV === "development") {
  const React = require("react");
  const createDevTools = require("redux-devtools").createDevTools;
  const LogMonitor = require("redux-devtools-log-monitor")["default"];
  const DockMonitor = require("redux-devtools-dock-monitor")["default"];
  const DevTools = createDevTools(
    <DockMonitor
      toggleVisibilityKey="ctrl-h"
      changePositionKey="ctrl-q"
      defaultIsVisible={false}>
      <LogMonitor theme="tomorrow" />
    </DockMonitor>
  );

  module.exports = DevTools;
} else {
  module.exports = () => null;
}
