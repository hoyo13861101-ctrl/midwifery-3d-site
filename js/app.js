/* =========================================================
   فایل اصلی JavaScript سایت مامایی سه‌بعدی
   برای تغییر محتوای سایت، بیشتر وقت‌ها فقط بخش «تنظیمات قابل ویرایش» را تغییر بدهید.
   ========================================================= */

(() => {
  "use strict";

  /* ---------------------------------------------------------
     بخش تنظیمات قابل ویرایش سایت
     نام‌ها، قیمت، آدرس، مدارک و مقاله‌ها را از اینجا تغییر دهید.
     --------------------------------------------------------- */
  const SITE_CONFIG = {
    clinicName: "کلینیک مامایی آرشیدا",
    phone: "۰۲۱-۲۲۴۴-۸۸۷۶",
    email: "info@arshida-midwife.ir",
    address: "تهران، خیابان شریعتی، بالاتر از میرداماد، پلاک ۲۷، واحد ۴",
    hours: "شنبه تا چهارشنبه، ۱۰ تا ۱۸",
    courseTitle: "درمان مشکل ناباروری با دکتر ارشدی زاده",
    coursePrice: "۳,۸۰۰,۰۰۰ تومان",
    courseDescription:
      "یک دوره آموزشی مرحله‌به‌مرحله برای آشنایی با ارزیابی ناباروری، آزمایش‌های اولیه، سبک زندگی، زمان‌بندی مراجعه و مسیرهای درمانی رایج."
  };

  /* بخش آرایه مدارک و تخصص‌های مطرح مامایی خارج از کشور */
  const CERTIFICATES = [
    {
      icon: "RM",
      title: "Registered Midwife / RM",
      text: "مسیر ثبت حرفه‌ای ماما در کشورهایی مثل بریتانیا، استرالیا و کانادا؛ معمولاً همراه با ارزیابی صلاحیت، زبان و قوانین حرفه‌ای.",
      tags: ["ثبت حرفه‌ای", "خارج از کشور", "Practice"]
    },
    {
      icon: "BSc",
      title: "کارشناسی مامایی یا Nursing-Midwifery",
      text: "پایه علمی مراقبت بارداری، زایمان، پس از زایمان، سلامت جنسی و آموزش مادر؛ نقطه شروع رایج برای مسیرهای بین‌المللی.",
      tags: ["دانشگاهی", "مراقبت مادر", "پایه"]
    },
    {
      icon: "MSc",
      title: "MSc / Advanced Midwifery Practice",
      text: "کارشناسی ارشد مامایی برای نقش‌های پیشرفته، پژوهش، مدیریت بالینی، آموزش و طراحی برنامه‌های سلامت مادر و کودک.",
      tags: ["ارشد", "پژوهش", "Advanced"]
    },
    {
      icon: "CNM",
      title: "Certified Nurse-Midwife / CNM",
      text: "یکی از مسیرهای شناخته‌شده در آمریکا برای پرستار-ماماها؛ ترکیبی از پرستاری پیشرفته و مراقبت تخصصی مامایی.",
      tags: ["آمریکا", "پرستار-ماما", "Clinical"]
    },
    {
      icon: "IBCLC",
      title: "مشاور بین‌المللی شیردهی IBCLC",
      text: "مدرک معتبر برای مشاوره شیردهی، مشکلات پستان، latch، تغذیه نوزاد و حمایت تخصصی مادر پس از زایمان.",
      tags: ["شیردهی", "نوزاد", "Lactation"]
    },
    {
      icon: "CTG",
      title: "Fetal Monitoring / CTG",
      text: "آموزش پایش قلب جنین و تفسیر الگوهای CTG؛ مهارتی کاربردی برای مراقبت امن‌تر در بارداری و زایمان.",
      tags: ["جنین", "پایش", "زایمان"]
    },
    {
      icon: "PMH",
      title: "Perinatal Mental Health",
      text: "تخصص سلامت روان دوران بارداری و پس از زایمان؛ شامل غربالگری افسردگی، اضطراب و ارجاع به تیم درمان.",
      tags: ["سلامت روان", "پس از زایمان", "حمایت"]
    }
  ];

  /* بخش آرایه مقاله‌های وبلاگ بیماری‌ها و راهکارها */
  const BLOG_POSTS = [
    {
      category: "بارداری",
      badge: "پایش قند",
      title: "دیابت بارداری؛ از تشخیص تا کنترل ایمن",
      summary: "دیابت بارداری معمولاً با غربالگری میانه بارداری مشخص می‌شود و نیاز به پیگیری منظم دارد.",
      tips: [
        "اندازه‌گیری قند طبق برنامه پزشک یا ماما",
        "برنامه غذایی کم‌قند و فعالیت سبک در صورت مجاز بودن",
        "در بعضی موارد دارو یا انسولین با نظر پزشک"
      ]
    },
    {
      category: "هشدار",
      badge: "اورژانسی",
      title: "پره‌اکلامپسی؛ وقتی فشار خون در بارداری بالا می‌رود",
      summary: "فشار خون بالا همراه با سردرد شدید، تاری دید، درد بالای شکم یا ورم ناگهانی می‌تواند خطرناک باشد.",
      tips: [
        "اندازه‌گیری منظم فشار خون",
        "مراجعه فوری در سردرد شدید، تاری دید یا درد قفسه/بالای شکم",
        "درمان و زمان زایمان فقط بر اساس نظر تیم درمان"
      ]
    },
    {
      category: "بارداری",
      badge: "خون و تغذیه",
      title: "کم‌خونی فقر آهن در بارداری",
      summary: "خستگی، تپش قلب، رنگ‌پریدگی و سرگیجه می‌تواند نشانه کم‌خونی باشد و با آزمایش قابل بررسی است.",
      tips: [
        "آزمایش CBC و فریتین طبق توصیه پزشک",
        "مصرف آهن و اسیدفولیک طبق نسخه",
        "تغذیه حاوی گوشت، حبوبات، سبزیجات برگ سبز و ویتامین C"
      ]
    },
    {
      category: "بارداری",
      badge: "عفونت",
      title: "عفونت ادراری در بارداری؛ چرا نباید ساده گرفت؟",
      summary: "سوزش ادرار، تکرر، درد زیر شکم یا تب نیاز به بررسی دارد؛ حتی عفونت بدون علامت هم در بارداری مهم است.",
      tips: [
        "انجام آزمایش ادرار و کشت در صورت نیاز",
        "مصرف آنتی‌بیوتیک فقط با تجویز پزشک",
        "نوشیدن آب کافی و مراجعه سریع در تب یا درد پهلو"
      ]
    },
    {
      category: "باروری",
      badge: "ناباروری",
      title: "PCOS و ناباروری؛ از سبک زندگی تا درمان تخصصی",
      summary: "سندرم تخمدان پلی‌کیستیک می‌تواند با بی‌نظمی قاعدگی، آکنه، موهای زائد و اختلال تخمک‌گذاری همراه باشد.",
      tips: [
        "ارزیابی هورمونی، سونوگرافی و بررسی متابولیک",
        "اصلاح سبک زندگی، خواب، تغذیه و فعالیت بدنی",
        "داروهای تحریک تخمک‌گذاری یا درمان‌های پیشرفته فقط با نظر متخصص"
      ]
    },
    {
      category: "شیردهی",
      badge: "پس از زایمان",
      title: "ماستیت و درد پستان در دوران شیردهی",
      summary: "درد، قرمزی، تب یا احساس توده در پستان ممکن است نشانه التهاب یا عفونت باشد و نیاز به پیگیری دارد.",
      tips: [
        "اصلاح وضعیت شیردهی و تخلیه مناسب پستان",
        "کمپرس، استراحت و مایعات کافی طبق توصیه ماما",
        "در تب بالا یا درد شدید، مراجعه برای بررسی و احتمال آنتی‌بیوتیک"
      ]
    }
  ];

  /* ---------------------------------------------------------
     بخش مقداردهی اولیه محتوای متنی از SITE_CONFIG
     --------------------------------------------------------- */
  function applySiteConfig() {
    const setText = (selector, value) => {
      const element = document.querySelector(selector);
      if (element) element.textContent = value;
    };

    setText("#courseTitle", SITE_CONFIG.courseTitle);
    setText("#courseDescription", SITE_CONFIG.courseDescription);
    setText("#coursePrice", SITE_CONFIG.coursePrice);
    setText("#contactPhone", SITE_CONFIG.phone);
    setText("#contactEmail", SITE_CONFIG.email);
    setText("#contactAddress", SITE_CONFIG.address);
    setText("#contactHours", SITE_CONFIG.hours);

    const mailLink = document.querySelector(".modal-actions a[href^='mailto']");
    if (mailLink) {
      mailLink.href = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent("ثبت نام دوره ناباروری")}`;
    }
  }

  /* ---------------------------------------------------------
     بخش ساخت کارت‌های مدارک بین‌المللی مامایی
     --------------------------------------------------------- */
  function renderCertificates() {
    const wrapper = document.getElementById("certCards");
    if (!wrapper) return;

    wrapper.innerHTML = CERTIFICATES.map((item) => `
      <div class="info-card reveal">
        <div class="card-icon" aria-hidden="true">${item.icon}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <div class="tag-row">
          ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
    `).join("");
  }

  /* ---------------------------------------------------------
     بخش ساخت کارت‌های وبلاگ بیماری‌ها و درمان‌ها
     --------------------------------------------------------- */
  function renderBlogPosts(filter = "all", query = "") {
    const wrapper = document.getElementById("blogGrid");
    if (!wrapper) return;

    const normalizedQuery = query.trim().toLowerCase();
    const filteredPosts = BLOG_POSTS.filter((post) => {
      const matchesFilter = filter === "all" || post.category === filter;
      const searchableText = `${post.title} ${post.summary} ${post.badge} ${post.category} ${post.tips.join(" ")}`.toLowerCase();
      const matchesQuery = !normalizedQuery || searchableText.includes(normalizedQuery);
      return matchesFilter && matchesQuery;
    });

    if (!filteredPosts.length) {
      wrapper.innerHTML = `<div class="no-results">نتیجه‌ای پیدا نشد. عبارت جستجو یا فیلتر را تغییر دهید.</div>`;
      return;
    }

    wrapper.innerHTML = filteredPosts.map((post) => `
      <article class="blog-card reveal">
        <div class="meta">
          <span class="tag">${post.category}</span>
          <span>${post.badge}</span>
        </div>
        <h3>${post.title}</h3>
        <p>${post.summary}</p>
        <ul>
          ${post.tips.map((tip) => `<li>${tip}</li>`).join("")}
        </ul>
        <a class="read-more" href="#contact" aria-label="دریافت مشاوره درباره ${post.title}">دریافت مشاوره ←</a>
      </article>
    `).join("");

    observeRevealElements();
  }

  /* ---------------------------------------------------------
     بخش فیلتر و جستجوی وبلاگ
     --------------------------------------------------------- */
  function initBlogTools() {
    const buttons = document.querySelectorAll("[data-filter]");
    const searchInput = document.getElementById("blogSearch");
    let activeFilter = "all";

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        activeFilter = button.dataset.filter || "all";
        renderBlogPosts(activeFilter, searchInput?.value || "");
      });
    });

    searchInput?.addEventListener("input", () => {
      renderBlogPosts(activeFilter, searchInput.value);
    });
  }

  /* ---------------------------------------------------------
     بخش منوی موبایل و بستن منو پس از کلیک
     --------------------------------------------------------- */
  function initNavigation() {
    const toggle = document.getElementById("navToggle");
    const nav = document.getElementById("mainNav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------------------------------------------------
     بخش نوار پیشرفت اسکرول
     --------------------------------------------------------- */
  function initScrollProgress() {
    const progress = document.getElementById("scrollProgress");
    if (!progress) return;

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
      progress.style.width = `${percent}%`;
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  /* ---------------------------------------------------------
     بخش انیمیشن ورود عناصر هنگام اسکرول
     --------------------------------------------------------- */
  let revealObserver;
  function observeRevealElements() {
    const elements = document.querySelectorAll(".reveal:not(.is-visible)");

    elements.forEach((element) => {
      const delay = element.dataset.delay;
      if (delay) element.style.setProperty("--delay", `${delay}ms`);
    });

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
    }

    elements.forEach((element) => revealObserver.observe(element));
  }

  /* ---------------------------------------------------------
     بخش شمارنده‌های آماری هیرو
     --------------------------------------------------------- */
  function initCounters() {
    const counters = document.querySelectorAll("[data-counter]");
    if (!counters.length) return;

    const runCounter = (element) => {
      const target = Number(element.dataset.counter || 0);
      const duration = 1100;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = Math.round(target * eased).toLocaleString("fa-IR");
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
      counters.forEach(runCounter);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach((counter) => observer.observe(counter));
  }

  /* ---------------------------------------------------------
     بخش مودال ثبت‌نام دوره
     --------------------------------------------------------- */
  function initCourseModal() {
    const modal = document.getElementById("courseModal");
    const open = document.getElementById("openCourseModal");
    const close = document.getElementById("closeCourseModal");
    if (!modal || !open || !close) return;

    const openModal = () => {
      modal.hidden = false;
      document.body.style.overflow = "hidden";
      close.focus();
    };

    const closeModal = () => {
      modal.hidden = true;
      document.body.style.overflow = "";
      open.focus();
    };

    open.addEventListener("click", openModal);
    close.addEventListener("click", closeModal);
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !modal.hidden) closeModal();
    });
  }

  /* ---------------------------------------------------------
     بخش فرم تماس نمایشی
     --------------------------------------------------------- */
  function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("درخواست شما به صورت نمایشی ثبت شد. برای سایت واقعی باید فرم به ایمیل یا بک‌اند وصل شود.");
      form.reset();
    });
  }

  /* ---------------------------------------------------------
     بخش Three.js: صحنه سه‌بعدی مینیمال برای هیرو سایت
     اگر مدل Blender/Unity دارید، می‌توانید این قسمت را با GLTFLoader توسعه دهید.
     --------------------------------------------------------- */
  function initThreeHero() {
    const canvas = document.getElementById("threeHero");
    if (!canvas || typeof THREE === "undefined") return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const group = new THREE.Group();
    scene.add(group);

    // بخش نورپردازی صحنه Three.js
    const ambient = new THREE.AmbientLight(0xffffff, 1.15);
    scene.add(ambient);

    const keyLight = new THREE.PointLight(0xffb29e, 2.2, 18);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x9bd5c9, 1.6, 14);
    fillLight.position.set(-4, -2, 4);
    scene.add(fillLight);

    // بخش شکل مرکزی: یک حلقه ارگانیک نماد مراقبت و چرخه زندگی
    const ringGeometry = new THREE.TorusKnotGeometry(1.08, 0.18, 150, 18);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xd87574,
      metalness: 0.14,
      roughness: 0.42,
      emissive: 0x2a1111,
      emissiveIntensity: 0.08
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.position.set(-2.8, 0.4, 0);
    group.add(ring);

    // بخش کره‌های کوچک: نماد مادر و نوزاد به سبک مینیمال
    const mother = new THREE.Mesh(
      new THREE.SphereGeometry(0.46, 48, 48),
      new THREE.MeshStandardMaterial({ color: 0x6fa99b, roughness: 0.34, metalness: 0.08 })
    );
    mother.position.set(-2.82, 0.35, 0.02);
    group.add(mother);

    const baby = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 32, 32),
      new THREE.MeshStandardMaterial({ color: 0xffd8c9, roughness: 0.32, metalness: 0.02 })
    );
    baby.position.set(-2.47, -0.04, 0.08);
    group.add(baby);

    // بخش ذرات پس‌زمینه برای حس عمق سه‌بعدی
    const particlesCount = 140;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 11;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({ color: 0xa68be8, size: 0.035, transparent: true, opacity: 0.68 })
    );
    scene.add(particles);

    // بخش خطوط ظریف پزشکی/داده‌ای
    const curveMaterial = new THREE.LineBasicMaterial({ color: 0x6fa99b, transparent: true, opacity: 0.32 });
    for (let i = 0; i < 4; i += 1) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-5 + i * 2, -2.2 + Math.random(), -1),
        new THREE.Vector3(-3 + i, 0.2 + Math.random(), 0.2),
        new THREE.Vector3(-0.6 + i, 1.8 - Math.random(), -0.4),
        new THREE.Vector3(1.4 + i, 0.5 - Math.random(), 0.6)
      ]);
      const points = curve.getPoints(60);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, curveMaterial);
      scene.add(line);
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }

    window.addEventListener("resize", resize);
    resize();

    let mouseX = 0;
    let mouseY = 0;
    window.addEventListener("pointermove", (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 0.7;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 0.5;
    }, { passive: true });

    function animate() {
      requestAnimationFrame(animate);
      const time = performance.now() * 0.001;
      ring.rotation.x = time * 0.28;
      ring.rotation.y = time * 0.38;
      mother.position.y = 0.35 + Math.sin(time * 1.6) * 0.05;
      baby.position.y = -0.04 + Math.cos(time * 1.7) * 0.04;
      particles.rotation.y = time * 0.035;
      group.rotation.y += (mouseX - group.rotation.y) * 0.025;
      group.rotation.x += (-mouseY - group.rotation.x) * 0.025;
      renderer.render(scene, camera);
    }

    animate();
  }

  /* ---------------------------------------------------------
     بخش Babylon.js: صحنه مدارک و تخصص‌های بین‌المللی
     این صحنه تعاملی است و با موس/لمس قابل چرخاندن است.
     --------------------------------------------------------- */
  function initBabylonScene() {
    const canvas = document.getElementById("babylonStage");
    if (!canvas || typeof BABYLON === "undefined") return;

    const engine = new BABYLON.Engine(canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true,
      antialias: true
    });

    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

    const camera = new BABYLON.ArcRotateCamera(
      "degreesCamera",
      -Math.PI / 2.2,
      Math.PI / 2.35,
      6.6,
      new BABYLON.Vector3(0, 0.25, 0),
      scene
    );
    camera.attachControl(canvas, true);
    camera.wheelPrecision = 70;
    camera.lowerRadiusLimit = 4.8;
    camera.upperRadiusLimit = 9;

    const hemi = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(0, 1, 0), scene);
    hemi.intensity = 1.15;

    const point = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(2.6, 3.2, 2.2), scene);
    point.intensity = 1.1;
    point.diffuse = new BABYLON.Color3(1, 0.71, 0.62);

    const root = new BABYLON.TransformNode("certificatesRoot", scene);

    function material(name, hex, alpha = 1) {
      const mat = new BABYLON.StandardMaterial(name, scene);
      mat.diffuseColor = BABYLON.Color3.FromHexString(hex);
      mat.specularColor = new BABYLON.Color3(0.18, 0.18, 0.18);
      mat.alpha = alpha;
      return mat;
    }

    const cardMaterials = [
      material("sageMat", "#6FA99B"),
      material("roseMat", "#D87574"),
      material("lavenderMat", "#A68BE8"),
      material("creamMat", "#F4C98B")
    ];

    // بخش ساخت کارت سه‌بعدی مدرک با متن انگلیسی کوتاه برای خوانایی در Canvas
    function createCertificate(label, index, radius) {
      const angle = (Math.PI * 2 * index) / 4;
      const card = BABYLON.MeshBuilder.CreateBox(`certificate-${label}`, {
        width: 1.62,
        height: 1.02,
        depth: 0.055
      }, scene);
      card.parent = root;
      card.position.x = Math.cos(angle) * radius;
      card.position.z = Math.sin(angle) * radius;
      card.position.y = 0.25 + Math.sin(index) * 0.28;
      card.rotation.y = -angle + Math.PI / 2;
      card.material = cardMaterials[index % cardMaterials.length];

      const texture = new BABYLON.DynamicTexture(`texture-${label}`, { width: 512, height: 320 }, scene, true);
      const context = texture.getContext();
      context.clearRect(0, 0, 512, 320);
      context.fillStyle = "rgba(255,255,255,0.92)";
      context.roundRect?.(34, 34, 444, 252, 28);
      if (context.roundRect) context.fill();
      else context.fillRect(34, 34, 444, 252);
      context.fillStyle = "#27312f";
      context.font = "bold 74px Arial";
      context.textAlign = "center";
      context.fillText(label, 256, 184);
      context.fillStyle = "rgba(39,49,47,0.42)";
      context.font = "24px Arial";
      context.fillText("MIDWIFERY", 256, 226);
      texture.update();

      const labelMat = new BABYLON.StandardMaterial(`labelMat-${label}`, scene);
      labelMat.diffuseTexture = texture;
      labelMat.diffuseTexture.hasAlpha = true;
      labelMat.emissiveColor = new BABYLON.Color3(1, 1, 1);
      labelMat.specularColor = new BABYLON.Color3(0, 0, 0);

      const plane = BABYLON.MeshBuilder.CreatePlane(`label-${label}`, { width: 1.48, height: 0.88 }, scene);
      plane.parent = card;
      plane.position.z = -0.031;
      plane.rotation.y = Math.PI;
      plane.material = labelMat;
      return card;
    }

    ["RM", "MSc", "CNM", "IBCLC"].forEach((label, index) => createCertificate(label, index, 2.15));

    // بخش نماد مرکزی مادر و نوزاد در صحنه Babylon.js
    const motherMat = material("motherMat", "#FFFFFF");
    const accentMat = material("accentMat", "#D87574");
    const glassMat = material("glassMat", "#CDEEE5", 0.34);

    const motherHead = BABYLON.MeshBuilder.CreateSphere("motherHead", { diameter: 0.42, segments: 32 }, scene);
    motherHead.parent = root;
    motherHead.position.y = 0.92;
    motherHead.material = motherMat;

    const motherBody = BABYLON.MeshBuilder.CreateSphere("motherBody", { diameterX: 0.78, diameterY: 1.18, diameterZ: 0.5, segments: 32 }, scene);
    motherBody.parent = root;
    motherBody.position.y = 0.18;
    motherBody.material = glassMat;

    const babySphere = BABYLON.MeshBuilder.CreateSphere("babySphere", { diameter: 0.28, segments: 32 }, scene);
    babySphere.parent = root;
    babySphere.position.set(0.28, 0.12, -0.34);
    babySphere.material = accentMat;

    const torus = BABYLON.MeshBuilder.CreateTorus("careOrbit", { diameter: 2.6, thickness: 0.025, tessellation: 96 }, scene);
    torus.parent = root;
    torus.rotation.x = Math.PI / 2.5;
    torus.material = material("orbitMat", "#FFFFFF", 0.55);

    const ground = BABYLON.MeshBuilder.CreateDisc("softShadow", { radius: 2.9, tessellation: 96 }, scene);
    ground.rotation.x = Math.PI / 2;
    ground.position.y = -0.78;
    ground.material = material("shadowMat", "#000000", 0.16);

    // بخش رندر و انیمیشن Babylon.js
    engine.runRenderLoop(() => {
      const time = performance.now() * 0.001;
      root.rotation.y = time * 0.24;
      motherHead.position.y = 0.92 + Math.sin(time * 1.6) * 0.035;
      babySphere.position.y = 0.12 + Math.cos(time * 1.8) * 0.03;
      scene.render();
    });

    window.addEventListener("resize", () => engine.resize());
  }


  /* ---------------------------------------------------------
     بخش اجرای همه ماژول‌ها پس از آماده‌شدن DOM
     --------------------------------------------------------- */
  function init() {
    applySiteConfig();
    renderCertificates();
    renderBlogPosts();
    initBlogTools();
    initNavigation();
    initScrollProgress();
    observeRevealElements();
    initCounters();
    initCourseModal();
    initContactForm();
    initThreeHero();
    initBabylonScene();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
