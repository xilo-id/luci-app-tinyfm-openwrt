include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-tinyfm
PKG_VERSION:=3.0
PKG_RELEASE:=1

PKG_LICENSE:=GPL-3.0
PKG_MAINTAINER:=xilo <https://github.com/xilo-id/luci-app-tinyfm>

LUCI_TITLE:=LuCI support for TinyFM
LUCI_DEPENDS:=+php8 +php8-cgi +php8-fastcgi +php8-fpm \
    +php8-mod-session +php8-mod-ctype +php8-mod-fileinfo \
    +php8-mod-zip +php8-mod-iconv +php8-mod-mbstring \
    +coreutils-stat +zoneinfo-asia
LUCI_PKGARCH:=all

include $(TOPDIR)/feeds/luci/luci.mk

define Package/$(PKG_NAME)/description
 LuCI interface for TinyFM file manager.
endef

define Package/$(PKG_NAME)/install
	$(CP) ./root/* $(1)/
endef

$(eval $(call BuildPackage,$(PKG_NAME)))
