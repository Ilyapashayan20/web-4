    const basic = document.getElementById("basic")
    const premium = document.querySelector(".premium")


    premium.addEventListener('mousemove', function () {
        basic.classList.remove('sss')
        

    })

    premium.addEventListener('mouseout', function () {
        basic.classList.add('sss')
        

    })

