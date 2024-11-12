document.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelector(".banner");

    // 画面中央に配置
    const centerBanner = () => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const bannerWidth = banner.offsetWidth;
        const bannerHeight = banner.offsetHeight;

        banner.style.left = `${(windowWidth - bannerWidth) / 2}px`;
        banner.style.top = `${(windowHeight - bannerHeight) / 2}px`;
    };

    // 初期表示で中央に配置
    centerBanner();

    setTimeout(() => {
        const textContainer = document.querySelector('.text-container');
        const videoContainer = document.querySelector('.video-container');

        // テキストを非表示にし、ビデオを表示
        textContainer.style.display = 'none';
        videoContainer.style.display = 'block';
    }, 5000);

    // ドラッグ機能
    let isDragging = false;
    let offsetX, offsetY;

    banner.addEventListener("mousedown", (e) =>{
        isDragging = true;
        offsetX = e.clientX - banner.getBoundingClientRect().left;
        offsetY = e.clientY - banner.getBoundingClientRect().top;
        banner.style.cursor = "url('cursor.png'), grabbing";
    });

    banner.addEventListener("mousemove", (e) => {
        if(isDragging) {

            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;

            banner.style.left = `${newX}px`;
            banner.style.top = `${newY}px`;
        }
    });

    banner.addEventListener("mouseup", () => {
        isDragging = false;
        banner.style.cursor = "grab";
    });

});

