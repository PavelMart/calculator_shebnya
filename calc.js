const calc = document.getElementById('calc')
const calcInputElems = document.querySelectorAll('.calc__input')
const calculateBtn = document.getElementById('calculate')
const calcResult = document.getElementById('calc__result')

const square = document.getElementById('square')
const volume = document.getElementById('volume')
const mass = document.getElementById('mass')
const thickness = document.getElementById('thickness')
const number = document.getElementById('number')
const density = document.getElementById('density')

let type = ''
let variant = ''

const calculate = () => {
    let result = null
    let text = ''

    if (type === 'type-1') {
        if (variant === 'variant-1') {
            result = square.value * thickness.value * number.value * density.value
        } else if (variant === 'variant-2') {
            result = volume.value * density.value
        }
        text = `Масса щебня: ${result} кг (${(result/1000).toFixed(2)} т)`
    } else if (type === 'type-2') {
        if (variant === 'variant-1') {
            result = (Math.round(100 * mass.value * thickness.value * number.value / density.value))/100
            text = `Площадь: ${result} м2`
        } else if (variant === 'variant-2') {
            result = Math.round(100 * mass.value / density.value)/100
            text = `Объем: ${result} м3`
        }
    }

    calcResult.textContent = text
}

const defineChecked= (elems) => {
    let id = ''
    elems.forEach( elem => {
        if (elem.checked) id = elem.id
    })

    return id
}

const selectCalcType = () => {
    const typeElems = document.querySelectorAll('#calc__type input')
    const variantElems = document.querySelectorAll('#calc__var input')

    type = defineChecked(typeElems)
    variant = defineChecked(variantElems)
}

const changeDisplay = (disp1, disp2, disp3, disp4, disp5) => {
    square.parentNode.style.display = disp1
    mass.parentNode.style.display = disp2
    volume.parentNode.style.display = disp3
    thickness.parentNode.style.display = disp4
    number.parentNode.style.display = disp5
}

const openCalcType = () => {
    if (type === 'type-1') {
        if (variant === 'variant-1') {
            changeDisplay('flex', 'none', 'none', 'flex', 'flex')
        } else if (variant === 'variant-2') {
            changeDisplay('none', 'none', 'flex', 'none', 'none')
        }
    } else if (type === 'type-2') {
        if (variant === 'variant-1') {
            changeDisplay('none', 'flex', 'none', 'flex', 'flex')
        } else if (variant === 'variant-2') {
            changeDisplay('none', 'flex', 'none', 'none', 'none')
        }
    }

}

calc.addEventListener('click', e => {
    selectCalcType()
    openCalcType()
})

calculateBtn.addEventListener('click', e => {
    e.preventDefault()
    calculate()
})

selectCalcType()
openCalcType()
calculate()