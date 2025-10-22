$(document).ready(function() {
    // Fade-in animation
    $(".border-box").hide().fadeIn(1000);

    // You can replace the .corner-image div with an actual image:
    // $(".corner-image").html('<img src="your-image.png" style="width:100%; transform:rotate(45deg);">');
});


// start carousel
$(function () {
    const cardWidth = 200; // event-card width + margin
    const visibleCount = 5;
    const track = $(".carousel-track");
    const originalCards = $(".event-card");

    // Clone cards for looping
    originalCards.clone().appendTo(track);
    originalCards.clone().appendTo(track);

    let totalCards = $(".event-card").length;
    let current = 0;

    function goToCard(index) {
        const cards = $(".event-card");
        current = index;

        let offset = (cardWidth * current) - 200; // center one card
        track.css("transition", "transform 0.5s ease");
        track.css("transform", `translateX(${-offset}px)`);

        cards.removeClass("active");
        cards.eq(current).addClass("active");

        $(".dot").removeClass("active");
        $(".dot").eq(index % 5).addClass("active");
    }

    $(".dot").click(function () {
        const index = parseInt($(this).data("index"));
        goToCard(index);
    });

    setInterval(() => {
        current++;
        if (current >= totalCards - visibleCount) {
            track.css("transition", "none");
            current = 0;
            const resetOffset = (cardWidth * current) - 200;
            track.css("transform", `translateX(${-resetOffset}px)`);

            setTimeout(() => {
                track.css("transition", "transform 0.5s ease");
                current++;
                goToCard(current);
            }, 50);
        } else {
            goToCard(current);
        }
    }, 3000);

    goToCard(0);
});
// end carousel

// start toggle button

$(document).ready(function() {
    $('#btn3').click(function() {
        $('.arrow3').addClass('rotate');
        $('.arrow4').removeClass('rotate');
    });

    $('#btn4').click(function() {
        $('.arrow4').addClass('rotate');
        $('.arrow3').removeClass('rotate');
    });
});
// end toggle button


// access carousel
$(document).ready(function () {
    const $track = $('.carousel-track-access');
    const itemWidth = 400;

    const $first = $('.carousel-item-access').first().clone();
    const $last = $('.carousel-item-access').last().clone();

    $track.append($first);
    $track.prepend($last);

    let index = 1;
    const totalItems = $('.carousel-item-access').length;

    $track.css('transform', 'translateX(' + (-itemWidth * index) + 'px)');

    function updateCarousel(animate = true) {
        if (animate) {
            $track.css('transition', 'transform 0.3s ease-in-out');
        } else {
            $track.css('transition', 'none');
        }
        $track.css('transform', 'translateX(' + (-itemWidth * index) + 'px)');
    }

    $('.arrow-access-right').click(function () {
        index++;
        updateCarousel();

        if (index === totalItems - 1) {
            setTimeout(() => {
                index = 1;
                updateCarousel(false);
            }, 300);
        }
    });

    $('.arrow-access-left').click(function () {
        index--;
        updateCarousel();

        if (index === 0) {
            setTimeout(() => {
                index = totalItems - 2;
                updateCarousel(false);
            }, 300);
        }
    });
});

// access carousel





// 4 button container
$(document).ready(function(){
    // Default: load Panel 1 on page load
    $("#panel").html($("#content1").html()).show();
    $("#btn1 svg").addClass("rotate");
    let currentPanel = "panel1"; // tracking open panel

    $("#btn1").click(function(){
        if (currentPanel === "panel1") {
            $("#panel").slideUp("slow");
            currentPanel = "";
            $("#btn1 svg").removeClass("rotate");
        } else {
            $("#panel").hide().html($("#content1").html()).slideDown("slow");
            $("#btn1 svg").addClass("rotate");
            $("#btn2 svg").removeClass("rotate");
            currentPanel = "panel1";
        }
    });

    $("#btn2").click(function(){
        if (currentPanel === "panel2") {
            $("#panel").slideUp("slow");
            currentPanel = "";
            $("#btn2 svg").removeClass("rotate");
        } else {
            $("#panel").hide().html($("#content2").html()).slideDown("slow");
            $("#btn2 svg").addClass("rotate");
            $("#btn1 svg").removeClass("rotate");
            currentPanel = "panel2";
        }
    });
});

// start 3 cards
$(document).ready(function() {
    $('#toggle-summary').click(function() {
        $('.summary').slideToggle();
        const currentText = $(this).text();
        $(this).text(currentText.includes('▼') ? '概要を閉じる ▲' : '概要を見る ▼');
    });
});




// 2 button container
$(document).ready(function(){
    // Default: load Panel 1 on page load
    $("#panell").html($("#content10").html()).show();
    $("#btn10 svg").addClass("rotate");
    let currentPanel = "panel1"; // tracking open panel

    $("#btn10").click(function(){
        if (currentPanel === "panel1") {
            $("#panell").slideUp("slow");
            currentPanel = "";
            $("#btn10 svg").removeClass("rotate");
        } else {
            $("#panell").hide().html($("#content10").html()).slideDown("slow");
            $("#btn10 svg").addClass("rotate");
            $("#btn20 svg").removeClass("rotate");
            currentPanel = "panel1";
        }
    });

    $("#btn20").click(function(){
        if (currentPanel === "panel2") {
            $("#panell").slideUp("slow");
            currentPanel = "";
            $("#btn20 svg").removeClass("rotate");
        } else {
            $("#panell").hide().html($("#content20").html()).slideDown("slow");
            $("#btn20 svg").addClass("rotate");
            $("#btn1 svg").removeClass("rotate");
            currentPanel = "panel2";
        }
    });
});

// start 3 cards
// $(document).ready(function() {
//     $('#toggle-summary').click(function() {
//         $('.summary').slideToggle();
//         const currentText = $(this).text();
//         $(this).text(currentText.includes('▼') ? '概要を閉じる ▲' : '概要を見る ▼');
//     });
// });

//
// $(document).ready(function() {
//     $('.person-btn').click(function() {
//         const target = $(this).data('target');
//
//         // Hide all person-info blocks
//         $('.person-info').hide();
//
//         // Show the selected block
//         $(target).fadeIn();
//
//         // Reset all arrows to right
//         $('.person-btn .arrow').text('▶');
//
//         // Set clicked button's arrow to down
//         $(this).find('.arrow').text('▼');
//     });
// });


// Campus slide functionality
$(document).ready(function() {
    // Campus data array
    const campusData = [
        {
            title: "池袋キャンパス",
            subtitle: "都心で実学を学ぶ、<br />池袋キャンパス",
            description: "JR池袋駅東口から徒歩約10分。約7,300名の学生が学ぶ都心型キャンパス。医療·福祉·心理·教育分野の学びを中心に、救急車内処置実習室など20を超える実習室を完備し、実践的な教育を展開しています。",
            image: "image/for_parents/parent_width.webp"
        },
        {
            title: "中野キャンパス",
            subtitle: "最新設備で学ぶ、<br />中野キャンパス",
            description: "JR中野駅から徒歩約8分。最新の医療機器と充実した実習環境を備えたキャンパス。薬学部・健康医療スポーツ学部の学生が最先端の学びを実践しています。",
            image: "image/for_parents/parent_width.webp"
        },
        {
            title: "千葉キャンパス",
            subtitle: "自然豊かな環境で学ぶ、<br />千葉キャンパス",
            description: "緑豊かな環境に囲まれたキャンパス。広大な敷地には最新の実習施設が完備され、健康メディカル学部の学生が充実した学習環境で学んでいます。",
            image: "image/for_parents/parent_width.webp"
        }
    ];

    let currentSlide = 0;

    // Function to update campus content
    function updateCampusContent(index) {
        const campus = campusData[index];
        
        // Update mobile view content
        $('.facility-title-full-width .facility-main-title').html(`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${campus.title}`);
        $('.facility-content .facility-subtitle').html(campus.subtitle);
        $('.facility-description .facility-text').text(campus.description);
        $('.facility-image-wrapper .facility-image').attr('src', campus.image);
        
        // Update desktop view content
        $('.mobile-hide.card2 .card-title h2').text(campus.title);
        $('.mobile-hide.card2 .card-text').first().html(campus.subtitle);
        $('.mobile-hide.card2 .card-text').last().text(campus.description);
        $('.mobile-hide.card2 .img img[alt="card"]').attr('src', campus.image);
        
        console.log(`Switched to ${campus.title} - Slide ${index + 1} of ${campusData.length}`);
    }

    // Mobile arrow click handlers
    $('.nav-arrow-left').click(function() {
        console.log('Left arrow clicked - Previous slide');
        currentSlide = (currentSlide - 1 + campusData.length) % campusData.length;
        updateCampusContent(currentSlide);
    });

    $('.nav-arrow-right').click(function() {
        console.log('Right arrow clicked - Next slide');
        currentSlide = (currentSlide + 1) % campusData.length;
        updateCampusContent(currentSlide);
    });

    // Desktop arrow click handlers - Updated selectors
    $('.mobile-hide .card2 .img img[alt="arrowleft"]').click(function() {
        console.log('Desktop left arrow clicked - Previous slide');
        currentSlide = (currentSlide - 1 + campusData.length) % campusData.length;
        updateCampusContent(currentSlide);
    });

    $('.mobile-hide .card2 .img img[alt="arrowright"]').click(function() {
        console.log('Desktop right arrow clicked - Next slide');
        currentSlide = (currentSlide + 1) % campusData.length;
        updateCampusContent(currentSlide);
    });

    // Alternative selectors - try multiple approaches
    $('img[alt="arrowleft"]').click(function() {
        console.log('Any left arrow clicked - Previous slide');
        currentSlide = (currentSlide - 1 + campusData.length) % campusData.length;
        updateCampusContent(currentSlide);
    });

    $('img[alt="arrowright"]').click(function() {
        console.log('Any right arrow clicked - Next slide');
        currentSlide = (currentSlide + 1) % campusData.length;
        updateCampusContent(currentSlide);
    });

    // Add cursor pointer style to arrows
    $('.nav-arrow, img[alt="arrowleft"], img[alt="arrowright"]').css('cursor', 'pointer');
    
    // Debug: Check if elements exist
    console.log('Found left arrows:', $('img[alt="arrowleft"]').length);
    console.log('Found right arrows:', $('img[alt="arrowright"]').length);
    console.log('Found nav arrows:', $('.nav-arrow').length);
    
    console.log('Campus slide functionality initialized with', campusData.length, 'slides');
});
// Console section: multi-month rotator (APR -> MAY -> JUNE) + JS-only progress bar
$(document).ready(function () {
    const $wrap = $('#console-section');
    if ($wrap.length === 0) return;

    // Data for months (use existing assets only)
    const months = [
        {
            number: '1',
            month: 'JANUARY',
            items: [
                '・新年祝賀会',
                '・冬期集中講義',
                '・卒業論文発表会',
                '・就職活動準備セミナー',
                '・スキー実習'
            ],
            leftImage: 'assets/img/about_university/width_1408 (1).webp',
            rightImage: 'assets/img/about_university/width_800 (6).webp',
            leftAlt: '1月イベント画像1',
            rightAlt: '1月イベント画像2'
        },
        {
            number: '2',
            month: 'FEBRUARY',
            items: [
                '・後期期末試験',
                '・卒業研究発表',
                '・入学試験',
                '・春期留学説明会',
                '・バレンタインイベント'
            ],
            leftImage: 'assets/img/about_university/exchange3.webp',
            rightImage: 'assets/img/about_university/exchange5.webp',
            leftAlt: '2月イベント画像1',
            rightAlt: '2月イベント画像2'
        },
        {
            number: '3',
            month: 'MARCH',
            items: [
                '・卒業式',
                '・謝恩会',
                '・春期休暇',
                '・新入生準備説明会',
                '・桜祭り'
            ],
            leftImage: 'images/backgroundOne.jpg',
            rightImage: 'images/campus.jpg',
            leftAlt: '3月イベント画像1',
            rightAlt: '3月イベント画像2'
        },
        {
            number: '4',
            month: 'APRIL',
            items: [
                '・入学式',
                '・新入生オリエンテーション・ガイダンス',
                '・上級生ガイダンス',
                '・健康診断',
                '・ダラム短期留学出発（春期）'
            ],
            leftImage: 'assets/img/about_university/1slide.jpg',
            rightImage: 'assets/img/about_university/2slide.jpg',
            leftAlt: '4月イベント画像1',
            rightAlt: '4月イベント画像2'
        },
        {
            number: '5',
            month: 'MAY',
            items: [
                '・前期授業開始',
                '・新入生歓迎会',
                '・クラブ・サークル勧誘',
                '・体育祭',
                '・春季スポーツ大会'
            ],
            leftImage: 'assets/img/about_university/12.png',
            rightImage: 'assets/img/about_university/13.png',
            leftAlt: '5月イベント画像1',
            rightAlt: '5月イベント画像2'
        },
        {
            number: '6',
            month: 'JUNE',
            items: [
                '・前期中間試験',
                '・就職活動説明会',
                '・インターンシップ説明会',
                '・オープンキャンパス準備',
                '・梅雨祭り'
            ],
            leftImage: 'assets/img/about_university/width_800 (1).webp',
            rightImage: 'assets/img/about_university/width_800 (2).webp',
            leftAlt: '6月イベント画像1',
            rightAlt: '6月イベント画像2'
        },
        {
            number: '7',
            month: 'JULY',
            items: [
                '・前期期末試験',
                '・オープンキャンパス',
                '・夏期集中講義',
                '・海外研修プログラム',
                '・七夕祭り'
            ],
            leftImage: 'assets/img/about_university/width_800 (4).webp',
            rightImage: 'assets/img/about_university/width_800 (5).webp',
            leftAlt: '7月イベント画像1',
            rightAlt: '7月イベント画像2'
        },
        {
            number: '8',
            month: 'AUGUST',
            items: [
                '・夏期休暇',
                '・インターンシップ',
                '・夏期留学プログラム',
                '・オープンキャンパス',
                '・夏祭り'
            ],
            leftImage: 'images/circleimageone.jpg',
            rightImage: 'images/fourButton.jpg',
            leftAlt: '8月イベント画像1',
            rightAlt: '8月イベント画像2'
        },
        {
            number: '9',
            month: 'SEPTEMBER',
            items: [
                '・後期授業開始',
                '・新入生歓迎会（編入生）',
                '・秋季スポーツ大会',
                '・文化祭準備',
                '・就職説明会'
            ],
            leftImage: 'assets/img/about_university/width_800 (3).webp',
            rightImage: 'assets/img/about_university/13.png',
            leftAlt: '9月イベント画像1',
            rightAlt: '9月イベント画像2'
        },
        {
            number: '10',
            month: 'OCTOBER',
            items: [
                '・大学祭（四季祭）',
                '・後期中間試験',
                '・研究発表会',
                '・ハロウィンイベント',
                '・秋期留学説明会'
            ],
            leftImage: 'assets/img/about_university/width_800 (5).webp',
            rightImage: 'assets/img/about_university/width_800 (4).webp',
            leftAlt: '10月イベント画像1',
            rightAlt: '10月イベント画像2'
        },
        {
            number: '11',
            month: 'NOVEMBER',
            items: [
                '・学園祭',
                '・卒業研究中間発表',
                '・就職活動本格化',
                '・紅葉祭り',
                '・国際交流イベント'
            ],
            leftImage: 'assets/img/about_university/width_800 (3).webp',
            rightImage: 'assets/img/about_university/13.png',
            leftAlt: '11月イベント画像1',
            rightAlt: '11月イベント画像2'
        },
        {
            number: '12',
            month: 'DECEMBER',
            items: [
                '・後期期末試験',
                '・クリスマスイベント',
                '・冬期休暇',
                '・年末パーティー',
                '・卒業論文提出'
            ],
            leftImage: 'assets/img/about_university/width_800 (5).webp',
            rightImage: 'assets/img/about_university/width_800 (4).webp',
            leftAlt: '12月イベント画像1',
            rightAlt: '12月イベント画像2'
        }
    ];

    let idx = 0;

    function apply(idxToApply) {
        const d = months[idxToApply];
        // Date
        $wrap.find('.date-number').text(d.number);
        $wrap.find('.date-month').text(d.month);
        // Items
        const $items = $wrap.find('.event-item');
        $items.each(function (i) {
            if (d.items[i]) $(this).text(d.items[i]);
        });
        // Images fade swap
        const $left = $wrap.find('.event-image-left img');
        const $right = $wrap.find('.event-image-right img');
        $left.stop(true, true).fadeOut(250, function () {
            $(this).attr('src', d.leftImage).attr('alt', d.leftAlt).fadeIn(250);
        });
        $right.stop(true, true).fadeOut(250, function () {
            $(this).attr('src', d.rightImage).attr('alt', d.rightAlt).fadeIn(250);
        });
        // Progress
        updateProgress(idxToApply);
    }

    // Inject a minimal progress track + slider (no HTML/CSS edits)
    const $bar = $('<div/>', { id: 'console-progress' }).css({
        width: '70%',
        maxWidth: '900px',
        height: '4px',
        background: '#dfe6f0',
        borderRadius: '999px',
        position: 'relative',
        margin: '18px auto 0',
        overflow: 'visible'
    });
    const sliderWidth = 120; // blue block width similar to demo
    const $slider = $('<div/>').css({
        position: 'absolute',
        height: '12px',
        width: sliderWidth + 'px',
        background: '#2b57a3',
        top: '-4px', // sit over the thin track
        left: '0px',
        borderRadius: '4px',
        boxShadow: '0 0 6px rgba(0,0,0,0.05)'
    });
    $bar.append($slider);
    // Place after the console section
    $wrap.after($bar);

    function updateProgress(i) {
        const trackWidth = $bar.width();
        const maxLeft = Math.max(0, trackWidth - sliderWidth);
        const pos = Math.round((i / (months.length - 1)) * maxLeft);
        $slider.css('left', pos + 'px');
    }

    function next() {
        idx = (idx + 1) % months.length;
        apply(idx);
    }
    function prev() {
        idx = (idx - 1 + months.length) % months.length;
        apply(idx);
    }

    // Interactions
    $bar.on('click', function (e) {
        const barLeft = $bar.offset().left;
        const relX = Math.max(0, Math.min($bar.width(), e.pageX - barLeft));
        const maxLeft = Math.max(0, $bar.width() - sliderWidth);
        const snapped = Math.round((relX / $bar.width()) * (months.length - 1));
        idx = Math.max(0, Math.min(months.length - 1, snapped));
        apply(idx);
    });

    // Drag support
    let dragging = false;
    let dragOffsetX = 0;
    $slider.css('cursor', 'pointer');
    $slider.on('mousedown', function (e) {
        dragging = true;
        const sliderLeft = $slider.position().left;
        dragOffsetX = e.pageX - ($bar.offset().left + sliderLeft);
        e.preventDefault();
    });
    $(document).on('mousemove', function (e) {
        if (!dragging) return;
        const barLeft = $bar.offset().left;
        const trackWidth = $bar.width();
        const maxLeft = Math.max(0, trackWidth - sliderWidth);
        let newLeft = e.pageX - barLeft - dragOffsetX;
        newLeft = Math.max(0, Math.min(maxLeft, newLeft));
        $slider.css('left', newLeft + 'px');
    });
    $(document).on('mouseup', function (e) {
        if (!dragging) return;
        dragging = false;
        // snap to nearest month and apply
        const trackWidth = $bar.width();
        const maxLeft = Math.max(0, trackWidth - sliderWidth);
        const currentLeft = parseFloat($slider.css('left')) || 0;
        const ratio = maxLeft === 0 ? 0 : currentLeft / maxLeft;
        idx = Math.round(ratio * (months.length - 1));
        apply(idx);
    });

    // Keep position correct on resize
    $(window).on('resize', function(){
        updateProgress(idx);
    });
    // Optional: mouse wheel and arrow keys to switch
    $wrap.on('wheel', function (e) {
        e.preventDefault();
        if (e.originalEvent.deltaY > 0) next(); else prev();
    });
    $(document).on('keydown', function (e) {
        if (e.key === 'ArrowRight') { next(); }
        if (e.key === 'ArrowLeft') { prev(); }
    });

    // Init
    apply(3); // Initialize at APRIL as default (manual only, no auto-rotate)
});
// Post Console Slider for School Festival cards (no HTML/CSS changes)
// - Keeps existing three `.event-card` boxes and UI
// - Duplicates the center post into left and right boxes
// - Adds below controls as "..." dots and auto-plays
$(document).ready(function () {
    const $section = $('#event-slider-section.event-section');
    if ($section.length === 0) return;

    const $cards = $section.find('.event-card');
    if ($cards.length < 3) return;

    // Capture original posts (HTML snapshots)
    const posts = $cards.map(function () { return $(this).html(); }).get();

    // Determine index of 四季祭 if present; otherwise default to middle (1)
    let startIndex = 1;
    $cards.each(function (i) {
        const title = $(this).find('.event-title').text().trim();
        if (title.indexOf('四季祭') !== -1) startIndex = i;
    });

    let current = startIndex; // current center post index

    // Render function: center card shows current post, sides duplicate center
    function render() {
        const len = posts.length;
        const prev = (current - 1 + len) % len;
        const next = (current + 1) % len;

        // Populate left, center, right with prev/current/next
        $cards.eq(0).html(posts[prev]);
        $cards.eq(1).html(posts[current]);
        $cards.eq(2).html(posts[next]);

        // Update dots (active = current center)
        $dots.find('.event-dot').removeClass('active')
            .eq(current).addClass('active');
    }

    // Create dots below (styled as ellipsis "...") using existing CSS
    const $dots = $('');
    posts.forEach((_, i) => {
        const $d = $('<span class="event-dot" role="button" tabindex="0"/>')
            .text('.')
            .attr('data-index', i)
            .on('click keydown', function (e) {
                if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
                    current = i;
                    render();
                }
            })
            // style: larger dot, spacing, and pointer cursor
            .css({
                fontSize: '22px',
                lineHeight: '1',
                padding: '0 6px',
                cursor: 'pointer',
                color: '#173285'
            });
        $dots.append($d);
    });
    // Insert dots after the section
    $section.after($dots);

    // Autoplay
    let timer = setInterval(() => {
        current = (current + 1) % posts.length;
        render();
    }, 4000);

    // Pause on hover (desktop)
    $section.add($dots).on('mouseenter', function(){ clearInterval(timer); });
    $section.add($dots).on('mouseleave', function(){
        timer = setInterval(() => {
            current = (current + 1) % posts.length;
            render();
        }, 4000);
    });

    // Initial paint
    render();
});

// Link all program circles to the specified URL
$(document).ready(function () {
    const targetUrl = 'https://data.thu.ac.jp/3515/5163/8477/fig48.jpg';
    const $circles = $('.program-circle');
    if ($circles.length) {
        $circles.css('cursor', 'pointer')
            .attr('role', 'link')
            .attr('tabindex', '0')
            .on('click', function () {
                window.open(targetUrl, '_blank');
            })
            .on('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    window.open(targetUrl, '_blank');
                }
            });
    }
});