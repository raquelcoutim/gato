function changePositionCat() {
    const cat = document.getElementById("cat");
    catX = Math.random() * 500
    catY = Math.random() * 500
    cat.style.transform = `translate3d(${catX}px, ${catY}px, 0)`;

}