(function () {
  'use strict';

  var calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 配色。端末の設定を初期値にして、選んだらそれを覚える
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  root.dataset.theme = saved || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  var btn = document.getElementById('themeBtn');
  btn.addEventListener('click', function () {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
  });

  // ヘッダーの境界線
  var head = document.querySelector('.head');
  var onScroll = function () { head.classList.toggle('is-stuck', scrollY > 8); };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 出現アニメーション
  var targets = document.querySelectorAll('.sec__label, .sec__ttl, .sec__lead, .about, .rules, .cards, .work, .note, .links, .facts, .btn--lg');
  if (!calm && 'IntersectionObserver' in window) {
    targets.forEach(function (el) { el.classList.add('rv'); });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -12%' });
    targets.forEach(function (el) { io.observe(el); });
  }

  // 件数のカウントアップ
  var nums = document.querySelectorAll('.nums__n');
  var run = function (el) {
    var goal = +el.dataset.count;
    if (calm) { el.textContent = goal; return; }
    var t0 = performance.now();
    var step = function (t) {
      var p = Math.min(1, (t - t0) / 1100);
      el.textContent = Math.round(goal * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if ('IntersectionObserver' in window) {
    var io2 = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        run(e.target);
        io2.unobserve(e.target);
      });
    }, { threshold: .6 });
    nums.forEach(function (el) { io2.observe(el); });
  } else {
    nums.forEach(run);
  }

  // いま見ているセクションをナビに反映
  var links = [].slice.call(document.querySelectorAll('.head__nav a'));
  var secs = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });
  if ('IntersectionObserver' in window) {
    var io3 = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        var i = secs.indexOf(e.target);
        if (i < 0) return;
        links[i].classList.toggle('is-on', e.isIntersecting);
      });
    }, { rootMargin: '-45% 0px -50%' });
    secs.forEach(function (s) { if (s) io3.observe(s); });
  }
})();
