class MobileDesktopExtension {
  constructor() {
    this.runtime = null;
  }

  getInfo() {
    return {
      id: 'mobile_desktop_extension',
      name: 'Device Type',
      blocks: [
        {
          opcode: 'isMobile',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is Mobile?',
          arguments: {},
        },
        {
          opcode: 'isDesktop',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is Desktop?',
          arguments: {},
        },
      ],
    };
  }

  setRuntime(runtime) {
    this.runtime = runtime;
  }

  isMobile(args, util) {
    return /Mobi|Mobile|Android|iPhone OS|iPad|Touch/i.test(navigator.userAgent);
  }

  isDesktop(args, util) {
    return !/Windows|Mac OS|X11|SunOS|Haiku|BeOS|ReactOS/i.test(navigator.userAgent);
  }
}

Scratch.extensions.register(new MobileDesktopExtension());
