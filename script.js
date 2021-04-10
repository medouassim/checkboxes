var labels = document.querySelectorAll('label')
var activeCount = 0;
labels.forEach((label,index) => {
    label.addEventListener("click",(e) => {
        label.classList.toggle('active');
        if(labels[0].classList.contains('active') && labels[1].classList.contains('active') && labels[2].classList.contains('active')) {
            if(e.target === labels[2]) {
                labels[1].classList.remove('active');
            }
            if(e.target ===labels[1]) {
                labels[0].classList.remove('active');
            }
            if(e.target ===labels[0]) {
                labels[2].classList.remove('active')
            }
        } 
        
    })
    
    
})
