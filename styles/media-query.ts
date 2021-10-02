const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  betweenTabletMobileL: "555px",
  tablet: "768px",
  tabletL: "948px",
  tabletXL: "1110px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

export const above = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  betweenTabletMobileL: `(min-width: ${size.betweenTabletMobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletL: `(min-width: ${size.tabletL})`,
  tabletXL: `(min-width: ${size.tabletXL})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}
export const below = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  betweenTabletMobileL: `(max-width: ${size.betweenTabletMobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletL: `(max-width: ${size.tabletL})`,
  tabletXL: `(max-width: ${size.tabletXL})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
}
