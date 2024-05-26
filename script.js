document.addEventListener('DOMContentLoaded', function () {
    const parent = document.getElementById('parent');
    let draggedItem = null;

    parent.addEventListener('dragstart', function (e) {
        draggedItem = e.target;
        setTimeout(function () {
            draggedItem.style.display = 'none';
        }, 0);
    });

    parent.addEventListener('dragend', function () {
        setTimeout(function () {
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0);
    });

    parent.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    parent.addEventListener('dragenter', function (e) {
        e.preventDefault();
        if (e.target.classList.contains('image')) {
            e.target.style.backgroundImage = draggedItem.style.backgroundImage;
        }
    });

    parent.addEventListener('drop', function (e) {
        e.preventDefault();
        if (e.target.classList.contains('image')) {
            draggedItem.style.backgroundImage = e.target.style.backgroundImage;
            e.target.style.backgroundImage = null;
        }
    });
});
