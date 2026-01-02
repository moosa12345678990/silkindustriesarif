import $ from "jquery"
import { gsap } from "gsap"

function hoverBtn() {
  /* ================= CIRCLE DOT FOLLOW ================= */
  $(".tp-hover-btn").on("mouseenter mouseout", function (e: any) {
    const offset = $(this).offset()
    if (!offset) return

    const x = e.pageX - offset.left
    const y = e.pageY - offset.top

    $(this).find(".tp-btn-circle-dot").css({
      top: y,
      left: x,
    })
  })

  /* ================= PARALLAX BUTTON ================= */
  const hoverBtns = gsap.utils.toArray<HTMLElement>(".tp-hover-btn-wrapper")
  const hoverBtnItems = gsap.utils.toArray<HTMLElement>(".tp-hover-btn-item")

  hoverBtns.forEach((btn, i) => {
    const item = hoverBtnItems[i]
    if (!item) return

    $(btn).on("mousemove", (e: any) => {
      parallaxIt(e, btn, item, 60)
    })

    $(btn).on("mouseleave", () => {
      gsap.to(item, {
        duration: 1,
        x: 0,
        y: 0,
        ease: "power2.out",
      })
    })
  })

  /* ================= PARALLAX FUNCTION ================= */
  function parallaxIt(
    e: any,
    btn: HTMLElement,
    target: HTMLElement,
    movement: number
  ) {
    const $btn = $(btn)
    const offset = $btn.offset()
    if (!offset) return

    const relX = e.pageX - offset.left
    const relY = e.pageY - offset.top

    const width = $btn.width() || 1
    const height = $btn.height() || 1

    gsap.to(target, {
      duration: 1,
      x: ((relX - width / 2) / width) * movement,
      y: ((relY - height / 2) / height) * movement,
      ease: "power2.out",
    })
  }
}

export { hoverBtn }
