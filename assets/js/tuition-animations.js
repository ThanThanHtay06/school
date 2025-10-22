// Function to create letter spans for typing animation
function createLetterSpans(element) {
  // Save any HTML structure inside the element
  const html = element.innerHTML;
  const temp = document.createElement('div');
  temp.innerHTML = html;
  
  // Clear the element
  element.innerHTML = '';
  
  // Process each text node
  const processNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.nodeValue.trim();
      if (text) {
        const parent = document.createElement('span');
        parent.className = 'text-node';
        
        // Create spans for each character
        Array.from(text).forEach((char, index) => {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char;
          span.style.opacity = '0';
          span.style.display = 'inline-block';
          span.style.transform = 'translateY(10px)';
          span.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
          span.style.transitionDelay = `${index * 0.03}s`; // Faster animation
          parent.appendChild(span);
        });
        
        return parent;
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const clone = node.cloneNode(false);
      Array.from(node.childNodes).forEach(child => {
        const processed = processNode(child);
        if (processed) clone.appendChild(processed);
      });
      return clone;
    }
    return null;
  };
  
  // Process all child nodes
  Array.from(temp.childNodes).forEach(child => {
    const processed = processNode(child);
    if (processed) element.appendChild(processed);
  });
  
  return element;
}

// Function to start typing animation
function startTypingAnimation(element) {
  const letters = element.querySelectorAll('span');
  letters.forEach(letter => {
    setTimeout(() => {
      letter.style.opacity = '1';
      letter.style.transform = 'translateY(0)';
    }, 100); // Small delay to ensure DOM is ready
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Check if element is in the viewport (with 100px offset from bottom)
    return (
      rect.top <= windowHeight - 100 &&
      rect.bottom >= 0
    );
  }

  // Function to handle scroll events
  function handleScroll() {
    // Animate Tuition section title
    const tuitionTitle = document.querySelector('.scholarship');
    if (tuitionTitle && isInViewport(tuitionTitle) && !tuitionTitle.classList.contains('animate-typing')) {
      tuitionTitle.classList.add('animate-typing');
      createLetterSpans(tuitionTitle);
      startTypingAnimation(tuitionTitle);
    }

    // Animate section03.png image
    const tuitionImage = document.querySelector('img[src*="section03.png"]');
    if (tuitionImage && isInViewport(tuitionImage) && !tuitionImage.classList.contains('animate-slide')) {
      tuitionImage.classList.add('animate-slide');
    }

    // Animate Japanese text in card2
    const japaneseTitle = document.querySelector('.card2-content h2');
    const japaneseSubtitle = document.querySelector('.card2-content h3');

    if (japaneseTitle && isInViewport(japaneseTitle) && !japaneseTitle.classList.contains('animated')) {
      japaneseTitle.classList.add('animated');
      createLetterSpans(japaneseTitle);
      startTypingAnimation(japaneseTitle);
    }

    if (japaneseSubtitle && isInViewport(japaneseSubtitle) && !japaneseSubtitle.classList.contains('animated')) {
      japaneseSubtitle.classList.add('animated');
      createLetterSpans(japaneseSubtitle);
      startTypingAnimation(japaneseSubtitle);
    }
  }

  // Add scroll event listener with debounce for better performance
  let isScrolling;
  window.addEventListener('scroll', function() {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(handleScroll, 50);
  }, { passive: true });

  // Initial check in case elements are already in viewport
  handleScroll();
});
