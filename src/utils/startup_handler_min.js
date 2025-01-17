class startupHandlermin {
    constructor(app) {
      this.app = app;
    }
  
    get is_enabled() {
      return this.app.getLoginItemSettings().wasOpenedAsHidden;
    }
  
    enable() {
      this.app.setLoginItemSettings({
        openAsHidden: true,
      });
    }
  
    disable() {
      this.app.setLoginItemSettings({
        openAsHidden: false,
      });
    }
  
    toggle() {
      if (this.isEnabled) {
        this.disable();
      } else {
        this.enable();
      }
    }
  }
  
  module.exports = startupHandlermin;