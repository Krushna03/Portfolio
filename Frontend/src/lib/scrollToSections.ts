export const scrollToSection = (elementRef: any) => {
  if (elementRef?.current) {
    window.scrollTo({
      top: elementRef.current.offsetTop - 100,
      behavior: "smooth",
    })
  }
}
