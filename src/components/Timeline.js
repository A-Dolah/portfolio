import React, { useState, useEffect } from "react"

import timelineStyles from "./timeline.module.scss"

const Timeline = () => {
  const [visible, setVisible] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
  })

  let sliderBoxes = []
  let container = ""

  useEffect(() => {
    container = document.querySelector(".container")
    sliderBoxes = document.querySelectorAll(`.${timelineStyles.divContainer}`)
    container.addEventListener("scroll", debounce(handleScroll))
  }, [])

  function debounce(func, wait = 20, immediate = true) {
    var timeout
    return function() {
      var context = this,
        args = arguments
      var later = function() {
        timeout = null
        if (!immediate) func.apply(context, args)
      }
      var callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  const handleScroll = () => {
    sliderBoxes.forEach(sliderBox => {
      const slideInAt =
        window.scrollY + window.innerHeight - sliderBox.height / 2
      console.log(container.offsetTop)
      const boxBottom = sliderBox.offsetTop + sliderBox.height
      const isHalfShown = slideInAt > sliderBox.offsetTop
      const isNotScrolledPast = container.scrollY < boxBottom
      if (isHalfShown && isNotScrolledPast) {
        console.log("adding")
        sliderBox.className.add("visible")
      } else {
        console.log("removing")
        sliderBox.classList.remove("visible")
      }
    })
  }

  const onClick = num => {
    setVisible({ ...visible, [num]: !visible[num] })
  }

  return (
    <section className={timelineStyles.section}>
      <div className={`${timelineStyles.divContainer} `}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
        perspiciatis pariatur iure magni, itaque cumque beatae. Placeat
        recusandae earum cumque cupiditate, atque, voluptatum, reiciendis harum
        enim est iste voluptatem excepturi!
        <div
          className={`${timelineStyles.circle} ${
            visible.one ? timelineStyles.show : ""
          }`}
          onClick={() => onClick("one")}
        ></div>
      </div>
      <div className={timelineStyles.divContainer}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam id
        accusamus veniam corporis. Animi sint beatae ea asperiores iure minus
        minima voluptas optio eveniet voluptatem? Sed architecto dolorem ipsum
        labore.
        <div
          className={`${timelineStyles.circle} ${
            visible.two ? timelineStyles.show : ""
          }`}
          onClick={() => onClick("two")}
        ></div>
      </div>
      <div className={timelineStyles.divContainer}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, qui
        voluptatem id et voluptas in eum assumenda nihil, minus ad quae quisquam
        alias facere, neque modi! Aspernatur quam nesciunt sequi?
        <div
          className={`${timelineStyles.circle} ${
            visible.three ? timelineStyles.show : ""
          }`}
          onClick={() => onClick("three")}
        ></div>
      </div>
      <div className={timelineStyles.divContainer}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias sed
        minima harum beatae veritatis repudiandae labore nemo a vel delectus
        necessitatibus assumenda blanditiis dolores magni, quidem dolor.
        Tempora, quisquam?
        <div
          className={`${timelineStyles.circle} ${
            visible.four ? timelineStyles.show : ""
          }`}
          onClick={() => onClick("four")}
        ></div>
      </div>
      <div className={timelineStyles.divContainer}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
        aspernatur expedita reiciendis dolores porro, deserunt libero voluptatem
        placeat debitis tempora quas, fugiat mollitia officia iusto nihil
        veritatis veniam nobis autem.
        <div
          className={`${timelineStyles.circle} ${
            visible.five ? timelineStyles.show : ""
          }`}
          onClick={() => onClick("five")}
        ></div>
      </div>
      <div className={timelineStyles.divContainer}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        dignissimos id ullam saepe. Hic magnam rem tenetur beatae, voluptatibus
        quibusdam nam, aperiam perspiciatis itaque nihil aliquid quia accusamus,
        consequuntur corrupti?
        <div
          className={`${timelineStyles.circle} ${
            visible.six ? timelineStyles.show : ""
          }`}
          onClick={() => onClick("six")}
        ></div>
      </div>
      <div className={timelineStyles.divContainer}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, nisi
        magni earum sapiente quas tempore hic, nesciunt molestias, ad voluptate
        id odit quisquam consequatur! Libero amet minima veniam obcaecati quia!
        <div
          className={`${timelineStyles.circle} ${
            visible.seven ? timelineStyles.show : ""
          }`}
          onClick={() => onClick("seven")}
        ></div>
      </div>
      <div className={timelineStyles.divContainer}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
        soluta, culpa rem consequuntur incidunt quibusdam nesciunt, aliquid,
        praesentium laudantium dolore fuga quas. Cupiditate, eveniet nemo. Est
        enim exercitationem totam recusandae.
        <div
          className={`${timelineStyles.circle} ${
            visible.eight ? timelineStyles.show : ""
          }`}
          onClick={() => onClick("eight")}
        ></div>
      </div>
      <div className={timelineStyles.divContainer}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit explicabo
        eaque beatae reprehenderit quidem libero adipisci, excepturi placeat
        magnam vitae earum nihil molestias optio ad voluptates omnis assumenda
        exercitationem quae?
        <div
          className={`${timelineStyles.circle} ${
            visible.nine ? timelineStyles.show : ""
          }`}
          onClick={() => onClick("nine")}
        ></div>
      </div>
      <div className={timelineStyles.divContainer}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        deleniti quod corrupti aperiam nihil magni ad nobis repellendus
        voluptatibus veritatis fugit molestias nisi molestiae ea mollitia unde
        delectus, quam natus?
        <div
          className={`${timelineStyles.circle} ${
            visible.ten ? timelineStyles.show : ""
          }`}
          onClick={() => onClick("ten")}
        ></div>
      </div>
    </section>
  )
}

export default Timeline
