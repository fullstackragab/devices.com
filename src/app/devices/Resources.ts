export class Resources {
  public static MOBILE_ICON = 'assets/icons/smartphone.svg';
  public static LAPTOP_ICON = 'assets/icons/laptop.svg';
  public static TABLET_ICON = 'assets/icons/tablet.svg';
  public static DESKTOP_ICON = 'assets/icons/desktop.svg';
  public static TV_ICON = 'assets/icons/tv.svg';

  static getDeviceIcon(type: 'mobile' | 'laptop' | 'desktop' | 'tv' | 'tablet'): string {
    switch (type) {
      case 'mobile':
        return this.MOBILE_ICON;
      case 'laptop':
        return this.LAPTOP_ICON;
      case 'tablet':
        return this.TABLET_ICON;
      case 'desktop':
        return this.DESKTOP_ICON;
      case 'tv':
        return this.TV_ICON;
      default:
        return this.MOBILE_ICON;
    }
  }

  static getDeviceStatus(status: 'available' | 'offline'): string {
    switch(status) {
      case 'available':
        return 'Available'
      case 'offline':
        return 'Offline'
      default:
        return 'Available'
    }
  }
}
