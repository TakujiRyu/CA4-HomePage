const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElement1 = document.querySelectorAll('.hidden1');
hiddenElement1.forEach((el) => observer.observe(el));

const hiddenElement2 = document.querySelectorAll('.hidden2');
hiddenElement2.forEach((el) => observer.observe(el));