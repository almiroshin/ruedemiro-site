/* @ds-bundle: {"format":4,"namespace":"RueDeMirDesignSystem_50ab64","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ZoneList","sourcePath":"components/core/ZoneList.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"Accordion","sourcePath":"components/product/Accordion.jsx"},{"name":"BenefitGrid","sourcePath":"components/product/BenefitGrid.jsx"},{"name":"IngredientList","sourcePath":"components/product/IngredientList.jsx"},{"name":"ProductCard","sourcePath":"components/product/ProductCard.jsx"}],"sourceHashes":{"components/core/Button.jsx":"f7c11c566e82","components/core/Eyebrow.jsx":"7a013b413cbb","components/core/Logo.jsx":"0b48a6bfd8e0","components/core/Tag.jsx":"82f9971b89e3","components/core/ZoneList.jsx":"caa1d72ef47f","components/navigation/SiteFooter.jsx":"7e5f5178d3ba","components/navigation/SiteHeader.jsx":"292280e222b9","components/product/Accordion.jsx":"7c4261d0a12a","components/product/BenefitGrid.jsx":"da69d3835d91","components/product/IngredientList.jsx":"43cc99ec58b0","components/product/ProductCard.jsx":"200938f1a35b","ui_kits/website/About.jsx":"4dc9c46124e7","ui_kits/website/Assort.jsx":"9e340ff53e4a","ui_kits/website/Home.jsx":"f15e628e4179","ui_kits/website/Parts.jsx":"0446953865ae","ui_kits/website/Product.jsx":"19d042f2224d","ui_kits/website/WhereToBuy.jsx":"d44526351e33","ui_kits/website/data.js":"5b8ebb63393a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RueDeMirDesignSystem_50ab64 = window.RueDeMirDesignSystem_50ab64 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled,
  children,
  style
}) {
  const [h, setH] = React.useState(false);
  const pad = size === 'sm' ? '10px 20px' : size === 'lg' ? '18px 44px' : '14px 32px';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: pad,
    font: '500 12px/1.2 var(--font-sans)',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    borderRadius: 0,
    cursor: disabled ? 'default' : 'pointer',
    transition: 'background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft)',
    textDecoration: 'none',
    opacity: disabled ? .4 : 1,
    border: '1px solid var(--rdm-ink)'
  };
  const v = {
    primary: {
      background: h ? 'var(--rdm-graphite)' : 'var(--rdm-ink)',
      color: 'var(--rdm-white)',
      borderColor: h ? 'var(--rdm-graphite)' : 'var(--rdm-ink)'
    },
    outline: {
      background: h ? 'var(--rdm-ink)' : 'transparent',
      color: h ? 'var(--rdm-white)' : 'var(--rdm-ink)'
    },
    inverse: {
      background: h ? 'transparent' : 'var(--rdm-white)',
      color: h ? 'var(--rdm-white)' : 'var(--rdm-ink)',
      borderColor: 'var(--rdm-white)'
    },
    link: {
      background: 'none',
      border: 'none',
      padding: 0,
      color: h ? 'var(--rdm-graphite)' : 'var(--rdm-ink)',
      borderBottom: '1px solid currentColor',
      paddingBottom: 3
    }
  }[variant];
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setH(!disabled),
    onMouseLeave: () => setH(false),
    style: {
      ...base,
      ...v,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  tone = 'ink',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1.4 var(--font-sans)',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: tone === 'muted' ? 'var(--text-muted)' : tone === 'white' ? '#fff' : 'var(--text-primary)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function Logo({
  tone = 'ink',
  width = 180,
  base = '',
  href,
  style
}) {
  const img = /*#__PURE__*/React.createElement("img", {
    src: base + 'assets/' + 'logo.svg',
    alt: "RUE DE MIR\xD3",
    style: {
      width,
      display: 'block',
      filter: tone === 'white' ? 'brightness(0) invert(1)' : 'none',
      ...style
    }
  });
  return href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'inline-block'
    }
  }, img) : img;
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  color,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '6px 14px',
      border: color ? '1px solid transparent' : '1px solid var(--rdm-ink)',
      background: color || 'transparent',
      borderRadius: 999,
      font: '500 11px/1 var(--font-sans)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--rdm-ink)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/ZoneList.jsx
try { (() => {
function ZoneList({
  zones = [],
  tone = 'ink',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1.6 var(--font-sans)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: tone === 'muted' ? 'var(--text-muted)' : tone === 'white' ? '#fff' : 'var(--text-secondary)',
      ...style
    }
  }, zones.join(' · '));
}
Object.assign(__ds_scope, { ZoneList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ZoneList.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function SiteFooter({
  base = '',
  style
}) {
  const l = {
    font: '400 12px/1.6 var(--font-sans)',
    color: 'var(--text-secondary)',
    letterSpacing: '0.04em'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '56px 40px 32px',
      borderTop: '1px solid var(--rdm-stone)',
      background: 'var(--surface-page)',
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    base: base,
    width: 130
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:salut@ruedemiro.com",
    style: {
      ...l,
      color: 'var(--text-primary)'
    }
  }, "salut@ruedemiro.com"), /*#__PURE__*/React.createElement("a", {
    href: "https://t.me/ruedemiro",
    style: l
  }, "Telegram"), /*#__PURE__*/React.createElement("a", {
    href: "https://ru.pinterest.com/RUEDEMIRO/",
    style: l
  }, "Pinterest"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap',
      ...l,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u0418\u041F \u041C\u0438\u0440\u043E\u0448\u0438\u043D\u0430 \u0415. \u0412.\u2014 503012331528"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: l
  }, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"), /*#__PURE__*/React.createElement("a", {
    style: l
  }, "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0438"), /*#__PURE__*/React.createElement("a", {
    style: l
  }, "\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E"), /*#__PURE__*/React.createElement("a", {
    style: l
  }, "\u043D\u0430\u0432\u0435\u0440\u0445 \u2191"))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
const NAV = ['Ассортимент', 'Где купить', 'О бренде', 'Пресса', 'Сотрудничество'];
function SiteHeader({
  base = '',
  active,
  onNavigate,
  items = NAV,
  email = 'salut@ruedemiro.com',
  style
}) {
  const [m, setM] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32,
      padding: '22px 40px',
      background: 'var(--surface-page)',
      borderBottom: '1px solid var(--rdm-stone)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate && onNavigate('home'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    base: base,
    width: 150
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      flexWrap: 'wrap'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    onClick: () => onNavigate && onNavigate(it),
    onMouseEnter: () => setM(it),
    onMouseLeave: () => setM(null),
    style: {
      cursor: 'pointer',
      font: '400 13px/1 var(--font-sans)',
      letterSpacing: '0.04em',
      color: 'var(--text-primary)',
      paddingBottom: 4,
      borderBottom: '1px solid ' + (active === it || m === it ? 'var(--rdm-ink)' : 'transparent'),
      transition: 'border-color var(--dur-fast) var(--ease-soft)'
    }
  }, it))), /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email,
    style: {
      font: '500 12px/1 var(--font-sans)',
      letterSpacing: '0.06em'
    }
  }, email));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/product/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  defaultOpen = -1,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--rdm-stone)',
      ...style
    }
  }, items.map((it, i) => {
    const o = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--rdm-stone)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(o ? -1 : i),
      style: {
        all: 'unset',
        boxSizing: 'border-box',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '18px 0',
        cursor: 'pointer',
        font: '500 12px/1.4 var(--font-sans)',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--text-primary)'
      }
    }, /*#__PURE__*/React.createElement("span", null, it.title), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '300 22px/1 var(--font-sans)',
        transform: o ? 'rotate(45deg)' : 'none',
        transition: 'transform var(--dur-fast) var(--ease-soft)'
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: o ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-base) var(--ease-soft)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 0 20px',
        font: '300 14px/1.6 var(--font-sans)',
        color: 'var(--text-secondary)'
      }
    }, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/product/BenefitGrid.jsx
try { (() => {
function BenefitGrid({
  items = [],
  columns = 4,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ',minmax(0,1fr))',
      gap: '32px 40px',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: '1px solid var(--rdm-ink)',
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1.4 var(--font-sans)',
      letterSpacing: '0.18em',
      textTransform: 'uppercase'
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      font: '300 14px/1.6 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, it.text))));
}
Object.assign(__ds_scope, { BenefitGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/BenefitGrid.jsx", error: String((e && e.message) || e) }); }

// components/product/IngredientList.jsx
try { (() => {
function IngredientList({
  title = 'Ключевые ингредиенты',
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1.4 var(--font-sans)',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      marginBottom: 18
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px/1.4 var(--font-sans)'
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '300 14px/1.55 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, it.text)))));
}
Object.assign(__ds_scope, { IngredientList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/IngredientList.jsx", error: String((e && e.message) || e) }); }

// components/product/ProductCard.jsx
try { (() => {
function ProductCard({
  state,
  name,
  tagline,
  description,
  zones = [],
  price = '2190',
  image,
  labelColor = 'var(--rdm-core)',
  href,
  onClick,
  linkLabel,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      background: 'var(--surface-page)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      aspectRatio: '4/5',
      overflow: 'hidden',
      background: labelColor,
      cursor: onClick ? 'pointer' : 'default'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: h ? 'scale(1.03)' : 'scale(1)',
      transition: 'transform var(--dur-base) var(--ease-soft)'
    }
  })), state && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: "muted"
  }, state), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 30px/1.05 var(--font-display)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, name), tagline && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'italic 400 19px/1.3 var(--font-editorial)',
      marginTop: 6
    }
  }, tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '60%',
      borderTop: '1px solid var(--rdm-ink)',
      marginTop: 12
    }
  })), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '300 14px/1.6 var(--font-sans)',
      color: 'var(--text-secondary)',
      textWrap: 'pretty'
    }
  }, description), zones.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.ZoneList, {
    zones: zones
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 12,
      marginTop: 4
    }
  }, price && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1 var(--font-sans)',
      letterSpacing: '0.08em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      marginRight: 8
    }
  }, "\u0420\u0420\u0426"), price, " \u20BD"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "link",
    href: href,
    onClick: onClick
  }, linkLabel || 'Подробнее о ' + name + ' →')));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProductCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
function AboutScreen({
  go
}) {
  const {
    Button,
    Eyebrow
  } = window.RueDeMirDesignSystem_50ab64;
  const P = window.RDM_PRODUCTS;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: 680
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'url(../../assets/imagery/about-hero.jpeg) center/cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 64px',
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Title, {
    size: 44
  }, "\u0422\u0435\u043B\u043E \u043E\u0442\u0440\u0430\u0436\u0430\u0435\u0442 \u043D\u0430\u0448\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435"), /*#__PURE__*/React.createElement(Body, null, "RUE DE MIR\xD3 \u2014 \u044D\u0441\u0442\u0435\u0442\u0438\u0447\u043D\u044B\u0439 \u0431\u0440\u0435\u043D\u0434 \u0443\u0445\u043E\u0434\u0430 \u0437\u0430 \u0442\u0435\u043B\u043E\u043C \u0434\u043B\u044F \u043B\u044E\u0434\u0435\u0439, \u0434\u043B\u044F \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0442\u0435\u043B\u043E \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0447\u0430\u0441\u0442\u044C\u044E \u0441\u0442\u0438\u043B\u044F, \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u0438 \u043E\u0431\u0440\u0430\u0437\u0430 \u0436\u0438\u0437\u043D\u0438."), /*#__PURE__*/React.createElement(Body, null, "\u0413\u043E\u0440\u043E\u0434, \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435, \u0443\u0441\u0442\u0430\u043B\u043E\u0441\u0442\u044C, \u043A\u043B\u0438\u043C\u0430\u0442, \u043E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043F\u0440\u0438\u043A\u043E\u0441\u043D\u043E\u0432\u0435\u043D\u0438\u044F \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u043C\u0435\u043D\u044F\u044E\u0442 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043A\u043E\u0436\u0438. \u0423\u0445\u043E\u0434 \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0437\u0430\u043C\u0435\u0442\u0438\u0442\u044C \u044D\u0442\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0438 \u0434\u0430\u0442\u044C \u0442\u0435\u043B\u0443 \u0442\u043E, \u0447\u0442\u043E \u0435\u043C\u0443 \u043D\u0443\u0436\u043D\u043E \u0441\u0435\u0439\u0447\u0430\u0441."))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      background: 'var(--surface-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '96px 64px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Italic, {
    size: 30
  }, "\u041A\u0430\u043A \u043F\u043E\u044F\u0432\u0438\u043B\u0441\u044F RUE DE MIR\xD3"), /*#__PURE__*/React.createElement(Rule, {
    w: 120
  }), /*#__PURE__*/React.createElement(Body, null, "\u041C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 \u041B\u0435\u043D\u0430, \u044F \u043E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u0438\u0446\u0430 RUE DE MIR\xD3."), /*#__PURE__*/React.createElement(Body, null, "\u0418\u0434\u0435\u044F \u0431\u0440\u0435\u043D\u0434\u0430 \u043F\u043E\u044F\u0432\u0438\u043B\u0430\u0441\u044C \u0438\u0437 \u043F\u0440\u043E\u0441\u0442\u043E\u0433\u043E \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F: \u043C\u044B \u043F\u0440\u0438\u0432\u044B\u043A\u043B\u0438 \u0432\u044B\u0431\u0438\u0440\u0430\u0442\u044C \u0443\u0445\u043E\u0434 \u0434\u043B\u044F \u043B\u0438\u0446\u0430 \u043F\u043E \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044E \u043A\u043E\u0436\u0438, \u043D\u043E \u0434\u043B\u044F \u0442\u0435\u043B\u0430 \u0447\u0430\u0449\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u043E\u0434\u043D\u043E \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u043E\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E."), /*#__PURE__*/React.createElement(Body, null, "\u041A\u0440\u0435\u043C\u044B \u043C\u043E\u0433\u0443\u0442 \u043E\u0449\u0443\u0449\u0430\u0442\u044C\u0441\u044F \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043F\u043B\u043E\u0442\u043D\u044B\u043C\u0438. \u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043C\u0430\u0441\u043B\u0430 \u2014 \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u0436\u0438\u0440\u043D\u0443\u044E \u043F\u043B\u0451\u043D\u043A\u0443. \u0410 \u0430\u0440\u043E\u043C\u0430\u0442\u043D\u044B\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0434\u043B\u044F \u0442\u0435\u043B\u0430 \u043D\u0435\u0440\u0435\u0434\u043A\u043E \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u043A\u0440\u0430\u0441\u0438\u0432\u044B\u043C \u0437\u0430\u043F\u0430\u0445\u043E\u043C, \u043D\u0435 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u044F \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0443\u0445\u043E\u0434\u0430."), /*#__PURE__*/React.createElement(Body, null, "\u041C\u043D\u0435 \u0445\u043E\u0442\u0435\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u0435 \u0435\u0449\u0451 \u043E\u0434\u043D\u043E \u043C\u0430\u0441\u043B\u043E, \u0430 \u043F\u043E\u043D\u044F\u0442\u043D\u0443\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443: \u044D\u0441\u0442\u0435\u0442\u0438\u0447\u043D\u0443\u044E, \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0443\u044E \u0438 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0443\u044E \u0434\u043B\u044F \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F."), /*#__PURE__*/React.createElement(Body, {
    style: {
      color: 'var(--text-primary)'
    }
  }, "\u0422\u0430\u043A \u043F\u043E\u044F\u0432\u0438\u043B\u0441\u044F RUE DE MIR\xD3.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'url(../../assets/imagery/about-noroot-1.png) center/cover',
      minHeight: 620
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'url(../../assets/imagery/about-wonderfi.jpg) center/cover',
      minHeight: 680
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '96px 64px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Title, {
    size: 34
  }, "\u041E\u0434\u0438\u043D \u0430\u0440\u043E\u043C\u0430\u0442. \u041F\u044F\u0442\u044C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0439 \u043A\u043E\u0436\u0438."), /*#__PURE__*/React.createElement(Body, null, "\u0420\u0430\u0437\u043D\u044B\u043C \u0443\u0447\u0430\u0441\u0442\u043A\u0430\u043C \u0442\u0435\u043B\u0430 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043D\u0443\u0436\u0435\u043D \u0440\u0430\u0437\u043D\u044B\u0439 \u0443\u0445\u043E\u0434. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u0432 \u043E\u0441\u043D\u043E\u0432\u0435 RUE DE MIR\xD3 \u2014 \u043F\u044F\u0442\u044C \u0441\u0443\u0445\u0438\u0445 \u043C\u0430\u0441\u0435\u043B \u0441 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u043C\u0438 \u0444\u043E\u0440\u043C\u0443\u043B\u0430\u043C\u0438."), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--rdm-stone)'
    }
  }, P.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => go('product', p.id),
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      padding: '14px 0',
      borderBottom: '1px solid var(--rdm-stone)',
      cursor: 'pointer',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 20px/1 var(--font-display)',
      letterSpacing: '0.06em'
    }
  }, p.name, p.sub ? ' ' + p.sub : ''), /*#__PURE__*/React.createElement(Italic, {
    size: 18,
    style: {
      color: 'var(--text-secondary)'
    }
  }, p.tagline)))), /*#__PURE__*/React.createElement(Body, null, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u0430\u0436\u0434\u0443\u044E \u0444\u043E\u0440\u043C\u0443\u043B\u0443 \u043D\u0430 \u0442\u0435\u0445 \u0443\u0447\u0430\u0441\u0442\u043A\u0430\u0445, \u0433\u0434\u0435 \u043E\u043D\u0430 \u043D\u0443\u0436\u043D\u0430. \u0415\u0434\u0438\u043D\u044B\u0439 \u0430\u0440\u043E\u043C\u0430\u0442 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u043C\u0430\u0441\u043B\u0430 \u0438 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0441\u043E\u0447\u0435\u0442\u0430\u0442\u044C \u0438\u0445 \u0432 \u043E\u0434\u043D\u043E\u043C \u0440\u0438\u0442\u0443\u0430\u043B\u0435."))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      background: 'var(--surface-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '96px 64px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Italic, {
    size: 30
  }, "\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u0430\u0441\u043B\u043E \u0441\u0443\u0445\u043E\u0435"), /*#__PURE__*/React.createElement(Rule, {
    w: 120
  }), /*#__PURE__*/React.createElement(Body, null, "\u041D\u0430\u043C \u0431\u044B\u043B\u043E \u0432\u0430\u0436\u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0447\u0443\u0432\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u043C\u0430\u0441\u043B\u0430, \u043D\u043E \u0443\u0431\u0440\u0430\u0442\u044C \u043E\u0449\u0443\u0449\u0435\u043D\u0438\u0435 \u0442\u044F\u0436\u0435\u0441\u0442\u0438."), /*#__PURE__*/React.createElement(Body, null, "\u041B\u0451\u0433\u043A\u0430\u044F \u0442\u0435\u043A\u0441\u0442\u0443\u0440\u0430 \u0431\u044B\u0441\u0442\u0440\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F, \u0441\u043C\u044F\u0433\u0447\u0430\u0435\u0442 \u043A\u043E\u0436\u0443 \u0438 \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0430\u0442\u0438\u043D\u043E\u0432\u044B\u0439 \u0444\u0438\u043D\u0438\u0448 \u0431\u0435\u0437 \u043B\u0438\u043F\u043A\u043E\u0441\u0442\u0438 \u0438 \u0436\u0438\u0440\u043D\u043E\u0439 \u043F\u043B\u0451\u043D\u043A\u0438."), /*#__PURE__*/React.createElement(Body, null, "\u041C\u0430\u0441\u043B\u043E \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u0447\u0430\u0441\u0442\u044C\u044E \u043F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0433\u043E \u0443\u0445\u043E\u0434\u0430: \u043F\u043E\u0441\u043B\u0435 \u0434\u0443\u0448\u0430, \u043F\u0435\u0440\u0435\u0434 \u0432\u044B\u0445\u043E\u0434\u043E\u043C, \u043F\u043E\u0441\u043B\u0435 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0438\u043B\u0438 \u0432 \u043B\u044E\u0431\u043E\u0439 \u043C\u043E\u043C\u0435\u043D\u0442, \u043A\u043E\u0433\u0434\u0430 \u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0442\u0435\u043B\u0430."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('home')
  }, "\u041F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u043C\u0430\u0441\u043B\u043E"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('assort')
  }, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u043C\u0430\u0441\u043B\u0430"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'url(../../assets/imagery/about-noroot-2.png) center/cover',
      minHeight: 620
    }
  })));
}
window.AboutScreen = AboutScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Assort.jsx
try { (() => {
function AssortScreen({
  go
}) {
  const {
    Button,
    ZoneList,
    Eyebrow
  } = window.RueDeMirDesignSystem_50ab64;
  const P = window.RDM_PRODUCTS;
  const desc = {
    core: 'Масло смягчает шероховатые участки, помогает вернуть ощущение комфорта и поддерживает липидный барьер кожи. Сквалан, холестерол, миндальное масло и масло ши дополняют восстанавливающий уход.',
    recharge: 'Подходит для ежедневного самомассажа и помогает коже выглядеть более ровной, ухоженной и собранной. Масла сои, абрикоса, фундука и камелии сочетаются с экстрактами имбиря и амаранта.',
    escape: 'Лёгкая формула не перегружает кожу и помогает поддерживать ощущение комфорта и более ровную поверхность. Масло нима, экстракты ивы, гамамелиса и арники дополняют направленный уход.',
    weightless: 'Ментил лактат и ментол создают мягкий охлаждающий эффект, а масла миндаля, камелии и ши поддерживают гладкость и комфорт кожи.',
    balance: 'Жемчужная пудра придаёт деликатное свечение, лёгкие эмоленты смягчают кожу без липкости, а экстракт сельдерея, коэнзим Q10 и витамин Е дополняют уход.'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    pad: "88px 40px 56px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement(Title, {
    size: 48
  }, "\u041D\u0435 \u0432\u044B\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u0430\u0440\u043E\u043C\u0430\u0442. \u0412\u044B\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043A\u043E\u0436\u0438."), /*#__PURE__*/React.createElement(Body, {
    style: {
      marginTop: 22,
      fontSize: 18
    }
  }, "\u041A\u043E\u0436\u0430 \u0442\u0435\u043B\u0430 \u043D\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u043E\u0434\u043D\u043E\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u2014 \u0438 \u0434\u0430\u0436\u0435 \u0440\u0430\u0437\u043D\u044B\u0435 \u0437\u043E\u043D\u044B \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043C\u043E\u0433\u0443\u0442 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u044C \u0440\u0430\u0437\u043D\u043E\u0433\u043E \u0443\u0445\u043E\u0434\u0430. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 RUE DE MIR\xD3 \u2014 \u044D\u0442\u043E \u043D\u0435 \u043E\u0434\u043D\u043E \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u043E\u0435 \u043C\u0430\u0441\u043B\u043E, \u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0438\u0437 \u043F\u044F\u0442\u0438 \u0444\u043E\u0440\u043C\u0443\u043B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u0438\u043B\u0438 \u0441\u043E\u0447\u0435\u0442\u0430\u0442\u044C \u043C\u0435\u0436\u0434\u0443 \u0441\u043E\u0431\u043E\u0439."))), P.map((p, i) => /*#__PURE__*/React.createElement("section", {
    key: p.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      borderTop: '1px solid var(--rdm-stone)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      order: i % 2 ? 2 : 1,
      background: p.color + ' url(' + p.img + ') center/cover',
      minHeight: 560
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      order: i % 2 ? 1 : 2,
      padding: '72px 64px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, p.state), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 44px/1 var(--font-display)',
      letterSpacing: '0.06em'
    }
  }, p.name, p.sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      marginLeft: 12
    }
  }, p.sub)), /*#__PURE__*/React.createElement(Italic, null, p.tagline), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement(Body, null, desc[p.id]), /*#__PURE__*/React.createElement(ZoneList, {
    zones: p.zones
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1 var(--font-sans)',
      letterSpacing: '0.08em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "\u0420\u0420\u0426"), " 2190 \u20BD"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: () => go('product', p.id)
  }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"))))), /*#__PURE__*/React.createElement(Section, {
    pad: "72px 40px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('where')
  }, "\u0413\u0434\u0435 \u043A\u0443\u043F\u0438\u0442\u044C"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('about')
  }, "\u041E \u0431\u0440\u0435\u043D\u0434\u0435"))));
}
window.AssortScreen = AssortScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Assort.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function HomeScreen({
  go
}) {
  const {
    Button,
    ProductCard,
    ZoneList,
    Eyebrow
  } = window.RueDeMirDesignSystem_50ab64;
  const P = window.RDM_PRODUCTS;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 720,
      background: 'url(../../assets/imagery/home-noroot.png) center/cover',
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(27,26,25,0) 40%,rgba(27,26,25,.45))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '0 40px 72px',
      maxWidth: 1200,
      margin: '0 auto',
      width: '100%',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '400 64px/1.05 var(--font-display)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      maxWidth: 760
    }
  }, "\u0423\u0445\u043E\u0434 \u0437\u0430 \u0442\u0435\u043B\u043E\u043C", /*#__PURE__*/React.createElement("br", null), "\u043A\u0430\u043A \u0447\u0430\u0441\u0442\u044C \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u0441\u0442\u0438\u043B\u044F"), /*#__PURE__*/React.createElement(Italic, {
    size: 26,
    style: {
      marginTop: 18
    }
  }, "\u041F\u0430\u0440\u0444\u044E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0441\u0443\u0445\u0438\u0435 \u043C\u0430\u0441\u043B\u0430 \u0434\u043B\u044F \u0442\u0435\u043B\u0430"), /*#__PURE__*/React.createElement(Italic, {
    size: 20,
    style: {
      marginTop: 6,
      maxWidth: 560,
      opacity: .95
    }
  }, "\u041E\u0434\u0438\u043D \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0439 \u0430\u0440\u043E\u043C\u0430\u0442. \u041F\u044F\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0444\u043E\u0440\u043C\u0443\u043B \u2014 \u043F\u043E\u0434 \u0440\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u0436\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    onClick: () => window.scrollTo({
      top: document.getElementById('choose-oil').getBoundingClientRect().top + window.scrollY - 100,
      behavior: 'smooth'
    })
  }, "\u041F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u043C\u0430\u0441\u043B\u043E")))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.3fr)',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Title, null, "\u041E\u0434\u0438\u043D \u0430\u0440\u043E\u043C\u0430\u0442. \u041F\u044F\u0442\u044C \u0444\u043E\u0440\u043C\u0443\u043B."), /*#__PURE__*/React.createElement(Body, {
    style: {
      fontSize: 18
    }
  }, "\u041A\u043E\u0436\u0430 \u0442\u0435\u043B\u0430 \u043D\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u043E\u0434\u043D\u043E\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u2014 \u0438 \u0434\u0430\u0436\u0435 \u0440\u0430\u0437\u043D\u044B\u0435 \u0437\u043E\u043D\u044B \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043C\u043E\u0433\u0443\u0442 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u044C \u0440\u0430\u0437\u043D\u043E\u0433\u043E \u0443\u0445\u043E\u0434\u0430. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 RUE DE MIR\xD3 \u2014 \u044D\u0442\u043E \u043D\u0435 \u043E\u0434\u043D\u043E \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u043E\u0435 \u043C\u0430\u0441\u043B\u043E, \u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0438\u0437 \u043F\u044F\u0442\u0438 \u0444\u043E\u0440\u043C\u0443\u043B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u0438\u043B\u0438 \u0441\u043E\u0447\u0435\u0442\u0430\u0442\u044C \u043C\u0435\u0436\u0434\u0443 \u0441\u043E\u0431\u043E\u0439."))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-soft)",
    style: {
      scrollMarginTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: "choose-oil"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 760,
      margin: '0 auto 56px'
    }
  }, /*#__PURE__*/React.createElement(Title, {
    size: 34
  }, "\u041A\u0430\u043A\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043A\u043E\u0436\u0438 \u0432\u044B \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442\u0435 \u0441\u0435\u0433\u043E\u0434\u043D\u044F?"), /*#__PURE__*/React.createElement(Body, {
    style: {
      marginTop: 16
    }
  }, "\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0441 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u043A\u043E\u0436\u0438, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0441\u0435\u0439\u0447\u0430\u0441 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0431\u043E\u043B\u044C\u0448\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u044F. \u0420\u0430\u0437\u043D\u044B\u043C \u0443\u0447\u0430\u0441\u0442\u043A\u0430\u043C \u0442\u0435\u043B\u0430 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442\u044C \u0440\u0430\u0437\u043D\u044B\u0435 \u0444\u043E\u0440\u043C\u0443\u043B\u044B.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: 28
    }
  }, P.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    state: p.state,
    name: p.name,
    tagline: p.tagline,
    description: p.short,
    zones: p.zones,
    image: p.img,
    labelColor: p.color,
    onClick: () => go('product', p.id),
    linkLabel: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u2192",
    style: {
      background: 'transparent'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24,
      marginTop: 64,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Body, {
    style: {
      maxWidth: 620
    }
  }, "\u041A\u043E\u043C\u0431\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u2014 \u044D\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0440\u0430\u0437\u043D\u044B\u0445 \u0444\u043E\u0440\u043C\u0443\u043B \u043D\u0430 \u0440\u0430\u0437\u043D\u044B\u0445 \u0443\u0447\u0430\u0441\u0442\u043A\u0430\u0445 \u0442\u0435\u043B\u0430. \u041D\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u043C\u0435\u0448\u0438\u0432\u0430\u0442\u044C \u043C\u0430\u0441\u043B\u0430 \u043C\u0435\u0436\u0434\u0443 \u0441\u043E\u0431\u043E\u0439 \u0438\u043B\u0438 \u043D\u0430\u043D\u043E\u0441\u0438\u0442\u044C \u043E\u0434\u043D\u043E \u043F\u043E\u0432\u0435\u0440\u0445 \u0434\u0440\u0443\u0433\u043E\u0433\u043E."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('assort')
  }, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u043C\u0430\u0441\u043B\u0430"))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'url(../../assets/imagery/core-green.jpeg) center/cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--rdm-linen)',
      padding: '80px 64px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u0410\u0440\u043E\u043C\u0430\u0442"), /*#__PURE__*/React.createElement(Italic, {
    size: 28
  }, "\u0422\u0451\u043F\u043B\u044B\u0439. \u0414\u0440\u0435\u0432\u0435\u0441\u043D\u044B\u0439. \u0411\u043B\u0438\u0437\u043A\u043E \u043A \u043A\u043E\u0436\u0435."), /*#__PURE__*/React.createElement(Italic, {
    size: 22,
    style: {
      color: 'var(--text-secondary)'
    }
  }, "\u041D\u0435 \u043E\u0431\u043B\u0430\u043A\u043E \u0430\u0440\u043E\u043C\u0430\u0442\u0430. \u0421\u043B\u0435\u0434.", /*#__PURE__*/React.createElement("br", null), "\u0410\u0440\u043E\u043C\u0430\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u0435 \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u043A\u043E\u043C\u043D\u0430\u0442\u0443 \u0440\u0430\u043D\u044C\u0448\u0435 \u0432\u0430\u0441."), /*#__PURE__*/React.createElement(Rule, {
    w: 120
  }), /*#__PURE__*/React.createElement(Body, null, "\u041F\u0430\u0445\u043D\u0435\u0442 \u0431\u0435\u043B\u043E\u0439 \u0440\u0443\u0431\u0430\u0448\u043A\u043E\u0439 \u043D\u0430 \u0433\u043E\u043B\u043E\u0439 \u043A\u043E\u0436\u0435.", /*#__PURE__*/React.createElement("br", null), "\u041F\u0430\u0445\u043D\u0435\u0442 \u0442\u0430\u043A, \u0431\u0443\u0434\u0442\u043E \u0441\u043F\u0435\u0448\u0438\u0442\u044C \u043D\u0435\u043A\u0443\u0434\u0430.", /*#__PURE__*/React.createElement("br", null), "\u041F\u0430\u0445\u043D\u0435\u0442 \u043F\u043B\u0430\u043D\u0430\u043C\u0438 \u043D\u0430 \u0432\u0435\u0447\u0435\u0440."))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 32
    }
  }, "\u041F\u0435\u0440\u0432\u044B\u0439 \u0441\u043B\u043E\u0439 \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u0442\u0438\u043B\u044F"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--rdm-stone)'
    }
  }, P.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => go('product', p.id),
    style: {
      display: 'grid',
      gridTemplateColumns: '220px minmax(0,1fr) minmax(0,1fr)',
      gap: 24,
      padding: '22px 0',
      borderBottom: '1px solid var(--rdm-stone)',
      cursor: 'pointer',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 26px/1 var(--font-display)',
      letterSpacing: '0.06em'
    }
  }, p.name, p.sub ? ' ' + p.sub.replace(' ', '') : ''), /*#__PURE__*/React.createElement(Body, {
    style: {
      fontSize: 15
    }
  }, p.zones.slice(0, 3).join(', ').toLowerCase()), /*#__PURE__*/React.createElement(Italic, {
    size: 19,
    style: {
      color: 'var(--text-secondary)'
    }
  }, p.keys))))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      background: 'var(--surface-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '96px 64px',
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "\u041E \u0431\u0440\u0435\u043D\u0434\u0435"), /*#__PURE__*/React.createElement(Title, null, "\u0422\u0435\u043B\u043E \u2014 \u0447\u0430\u0441\u0442\u044C \u0441\u0442\u0438\u043B\u044F"), /*#__PURE__*/React.createElement(Body, null, "RUE DE MIR\xD3 \u2014 \u044D\u0441\u0442\u0435\u0442\u0438\u0447\u043D\u044B\u0439 \u0443\u0445\u043E\u0434 \u0437\u0430 \u0442\u0435\u043B\u043E\u043C \u0434\u043B\u044F \u043B\u044E\u0434\u0435\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u043E\u0441\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442 \u0442\u0435\u043B\u043E \u043A\u0430\u043A \u0447\u0430\u0441\u0442\u044C \u0441\u0432\u043E\u0435\u0433\u043E \u0441\u0442\u0438\u043B\u044F, \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u0438 \u043E\u0431\u0440\u0430\u0437\u0430 \u0436\u0438\u0437\u043D\u0438."), /*#__PURE__*/React.createElement(Body, null, "\u041F\u044F\u0442\u044C \u0444\u043E\u0440\u043C\u0443\u043B \u043E\u0442\u0432\u0435\u0447\u0430\u044E\u0442 \u043D\u0430 \u0440\u0430\u0437\u043D\u044B\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u0436\u0438, \u0430 \u0435\u0434\u0438\u043D\u044B\u0439 \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0439 \u0430\u0440\u043E\u043C\u0430\u0442 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0441\u043E\u0447\u0435\u0442\u0430\u0442\u044C \u0438\u0445 \u0432 \u043E\u0434\u043D\u043E\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u043C \u0440\u0438\u0442\u0443\u0430\u043B\u0435."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => go('about')
  }, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F RUE DE MIR\xD3"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'url(../../assets/imagery/brand-img-8987.jpeg) center/cover',
      minHeight: 620
    }
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) auto minmax(0,1fr)',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Italic, {
    size: 26
  }, "\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u0431\u0440\u0435\u043D\u0434\u0430 \u2014 \u044D\u0442\u043E \u043E\u0442\u0440\u0430\u0436\u0435\u043D\u0438\u0435."), /*#__PURE__*/React.createElement(Italic, {
    size: 22,
    style: {
      color: 'var(--text-secondary)',
      marginTop: 6
    }
  }, "\u041D\u0435 \u0431\u0443\u043A\u0432\u0430\u043B\u044C\u043D\u043E\u0435, \u0430 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0435.")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mirror-mark.png",
    style: {
      width: 200
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Body, null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, "\u0421\u0442\u0438\u043B\u044C"), " \u2014 \u0432\u043D\u0435\u0448\u043D\u0438\u0439 \u0441\u043B\u043E\u0439 \u043C\u0438\u0440\u0430 RUE DE MIR\xD3."), /*#__PURE__*/React.createElement(Body, null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, "\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0442\u0435\u043B\u0430"), " \u2014 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0439."), /*#__PURE__*/React.createElement(Body, null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, "\u0417\u0435\u0440\u043A\u0430\u043B\u043E"), " \u2014 \u043C\u043E\u043C\u0435\u043D\u0442 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u044F \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 22px/1.2 var(--font-display)',
      letterSpacing: '0.08em',
      marginTop: 12
    }
  }, "COMME DES ", /*#__PURE__*/React.createElement("span", {
    style: {
      borderBottom: '1px solid'
    }
  }, "MIRO"), "IRES*"), /*#__PURE__*/React.createElement(Italic, {
    size: 16,
    style: {
      color: 'var(--text-muted)'
    }
  }, "*\u0441\u043B\u043E\u0432\u043D\u043E \u0437\u0435\u0440\u043A\u0430\u043B\u0430 (\u0444\u0440.)")))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--rdm-ink)",
    pad: "88px 40px"
  }, /*#__PURE__*/React.createElement(Italic, {
    size: 30,
    style: {
      color: '#fff',
      textAlign: 'center',
      maxWidth: 820,
      margin: '0 auto'
    }
  }, "\u0411\u0440\u0435\u043D\u0434 \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0443 \u0431\u044B\u0441\u0442\u0440\u043E \u043F\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u0442\u0435\u043B\u043E \u0432 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0435\u043C\u0443 \u043F\u0440\u0438\u044F\u0442\u043D\u043E \u0436\u0438\u0442\u044C, \u0434\u0432\u0438\u0433\u0430\u0442\u044C\u0441\u044F, \u043E\u0434\u0435\u0432\u0430\u0442\u044C\u0441\u044F \u0438 \u0431\u044B\u0442\u044C \u0431\u043B\u0438\u0436\u0435 \u043A \u0434\u0440\u0443\u0433\u0438\u043C.")));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Parts.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  ZoneList,
  Tag
} = window.RueDeMirDesignSystem_50ab64;
function Section({
  children,
  bg,
  pad = '96px 40px',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg || 'var(--surface-page)',
      padding: pad,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, children));
}
function Title({
  children,
  size = 40,
  style
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: '400 ' + size + 'px/1.1 var(--font-display)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      textWrap: 'balance',
      ...style
    }
  }, children);
}
function Italic({
  children,
  size = 22,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'italic 400 ' + size + 'px/1.35 var(--font-editorial)',
      ...style
    }
  }, children);
}
function Body({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '300 16px/1.65 var(--font-sans)',
      color: 'var(--text-secondary)',
      textWrap: 'pretty',
      ...style
    }
  }, children);
}
function Rule({
  w = 220,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      borderTop: '1px solid var(--rdm-ink)',
      ...style
    }
  });
}
Object.assign(window, {
  Section,
  Title,
  Italic,
  Body,
  Rule
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Parts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Product.jsx
try { (() => {
function ProductScreen({
  id,
  go
}) {
  const {
    Button,
    ZoneList,
    Eyebrow,
    BenefitGrid,
    IngredientList,
    Accordion,
    ProductCard
  } = window.RueDeMirDesignSystem_50ab64;
  const P = window.RDM_PRODUCTS;
  const p = P.find(x => x.id === id) || P[0];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: 680
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: p.color + ' url(' + p.img + ') center/cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 64px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '400 60px/1 var(--font-display)',
      letterSpacing: '0.06em'
    }
  }, p.name, p.sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28,
      marginLeft: 14
    }
  }, p.sub)), /*#__PURE__*/React.createElement(Italic, {
    size: 20,
    style: {
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, p.tagline), /*#__PURE__*/React.createElement(Body, null, p.lead), /*#__PURE__*/React.createElement(ZoneList, {
    zones: p.zones
  }), /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "100 \u043C\u043B"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    href: "https://goldapple.ru/brands/rue-de-miro"
  }, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432 \u0417\u043E\u043B\u043E\u0442\u043E\u043C \u044F\u0431\u043B\u043E\u043A\u0435")), /*#__PURE__*/React.createElement(ZoneList, {
    zones: p.facts,
    tone: "muted",
    style: {
      textTransform: 'none',
      letterSpacing: '0.04em',
      fontSize: 13
    }
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-soft)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Italic, {
    size: 20,
    style: {
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, "\u041A\u043E\u0433\u0434\u0430 \u0432\u044B\u0431\u0438\u0440\u0430\u0442\u044C ", p.name), /*#__PURE__*/React.createElement(Body, {
    style: {
      marginTop: 14
    }
  }, p.when)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Body, {
    style: {
      color: 'var(--text-primary)'
    }
  }, p.name, " \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442:"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '10px 0 0',
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, p.fits.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      font: '300 16px/1.6 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, "\u2022 ", f))))), /*#__PURE__*/React.createElement(Italic, {
    size: 26,
    style: {
      textAlign: 'center',
      maxWidth: 760,
      margin: '64px auto 0',
      fontWeight: 500
    }
  }, p.note)), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(BenefitGrid, {
    items: p.benefits.map(([title, text]) => ({
      title,
      text
    }))
  }), /*#__PURE__*/React.createElement(Accordion, {
    style: {
      marginTop: 64
    },
    items: [{
      title: 'Аромат и текстура',
      content: 'Тёплый. Древесный. Близко к коже. Лёгкая текстура быстро распределяется и оставляет сатиновый финиш.'
    }, {
      title: 'Как использовать',
      content: 'Нанесите несколько капель на кожу после душа и распределите массажными движениями.'
    }, {
      title: 'Состав',
      content: 'Полный состав указан на упаковке.'
    }, {
      title: 'Срок годности',
      content: 'Указан на упаковке.'
    }]
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      background: 'var(--surface-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '88px 64px'
    }
  }, /*#__PURE__*/React.createElement(IngredientList, {
    items: p.ingredients.map(([name, text]) => ({
      name,
      text
    }))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'url(' + p.still + ') center/cover',
      minHeight: 600
    }
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Title, {
    size: 26,
    style: {
      maxWidth: 900,
      lineHeight: 1.3
    }
  }, p.name, " \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 ", p.tagline.toLowerCase(), ", \u043D\u043E \u0443\u0445\u043E\u0434 \u0437\u0430 \u0442\u0435\u043B\u043E\u043C \u043C\u043E\u0436\u0435\u0442 \u043C\u0435\u043D\u044F\u0442\u044C\u0441\u044F \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0430\u0441\u043B\u043E \u043F\u043E\u0434 \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043A\u043E\u0436\u0438 \u0438\u043B\u0438 \u0441\u043E\u0447\u0435\u0442\u0430\u0439\u0442\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0444\u043E\u0440\u043C\u0443\u043B \u0432 \u043E\u0434\u043D\u043E\u043C \u0440\u0438\u0442\u0443\u0430\u043B\u0435."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 28,
      marginTop: 56
    }
  }, P.filter(x => x.id !== p.id).map(x => /*#__PURE__*/React.createElement(ProductCard, {
    key: x.id,
    state: x.state,
    name: x.name,
    tagline: x.tagline,
    zones: x.zones,
    price: null,
    image: x.img,
    labelColor: x.color,
    onClick: () => {
      go('product', x.id);
    },
    linkLabel: 'Подробнее о ' + x.name + ' →'
  })))));
}
window.ProductScreen = ProductScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Product.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WhereToBuy.jsx
try { (() => {
function WhereScreen() {
  const {
    Eyebrow
  } = window.RueDeMirDesignSystem_50ab64;
  const shops = [['Ozon', '../../assets/stockists/ozon.svg', 'https://ozon.ru/s/rue-de-miro'], ['Золотое яблоко', '../../assets/stockists/goldapple.svg', 'https://goldapple.ru/brands/rue-de-miro'], ['Яндекс Маркет', '../../assets/stockists/yandex-market.svg', 'https://market.yandex.ru/cc/96wC5R'], ['Lio Store', null, 'https://liostore.com'], ['Moodra', null, 'https://moodrashop.ru'], ['Sun City', null, 'https://sunicity.ru'], ['Celebrity', null, 'https://www.saloncelebrity.ru'], ['Место', null, 'https://mestobe.ru/shop'], ['La Luna', null, 'https://t.me/laluna2028/68'], ['Joli Fée', null, 'https://vk.ru/boutiquejolifee']];
  return /*#__PURE__*/React.createElement(Section, {
    pad: "96px 40px 120px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement(Title, {
    size: 44
  }, "\u0413\u0434\u0435 \u043A\u0443\u043F\u0438\u0442\u044C"), /*#__PURE__*/React.createElement(Italic, {
    size: 24,
    style: {
      marginTop: 10
    }
  }, "\u041E\u043D\u043B\u0430\u0439\u043D \u0438 \u043E\u0444\u043B\u0430\u0439\u043D \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))',
      borderTop: '1px solid var(--rdm-stone)',
      borderLeft: '1px solid var(--rdm-stone)'
    }
  }, shops.map(([n, logo, href]) => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: href,
    target: "_blank",
    style: {
      height: 150,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRight: '1px solid var(--rdm-stone)',
      borderBottom: '1px solid var(--rdm-stone)',
      padding: 24
    }
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: n,
    style: {
      maxWidth: 120,
      maxHeight: 56
    }
  }) : /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, n)))), /*#__PURE__*/React.createElement(Body, {
    style: {
      marginTop: 24,
      fontSize: 13,
      textAlign: 'center'
    }
  }, "\u041B\u043E\u0433\u043E\u0442\u0438\u043F\u044B \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u043E\u0432, \u043A\u0440\u043E\u043C\u0435 \u043F\u0435\u0440\u0432\u044B\u0445 \u0442\u0440\u0451\u0445, \u0432 \u043F\u0440\u043E\u0435\u043A\u0442 \u043D\u0435 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u2014 \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F\u043C\u0438."));
}
window.WhereScreen = WhereScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WhereToBuy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.RDM_PRODUCTS = [{
  id: 'core',
  name: 'CORE',
  state: 'Сухость и стянутость',
  tagline: 'Восстановление и комфорт',
  short: 'Когда коже не хватает мягкости, гладкости и ощущения защищённости.',
  zones: ['Голени', 'Руки', 'Локти', 'Колени'],
  color: 'var(--rdm-core)',
  img: '../../assets/imagery/core-8972.jpeg',
  still: '../../assets/imagery/core-ingredients.jpg',
  keys: 'Squalane, Almond oil & Cholesterol',
  lead: 'Сухое масло для сухой, обезвоженной и склонной к стянутости кожи. Смягчает, поддерживает липидный барьер и возвращает коже гладкость без липкости и ощущения масляной плёнки.',
  facts: ['Быстро впитывается', 'Не оставляет липкости'],
  when: 'Когда после душа кожа быстро становится сухой, появляется стянутость, шероховатость или хочется более насыщенного ухода.',
  fits: ['для голеней, локтей, коленей и рук;', 'после горячего душа и контакта с жёсткой водой;', 'в отопительный сезон, после ветра и холода;', 'как базовое масло для ежедневного ухода.'],
  note: 'Формула помогает вернуть коже мягкость и комфорт, не оставляя тяжёлой масляной плёнки.',
  benefits: [['Мягкость', 'Сухие и шероховатые участки становятся более гладкими.'], ['Комфорт', 'Снижается ощущение стянутости после душа.'], ['Ухоженность', 'Кожа приобретает ровный сатиновый финиш.'], ['Лёгкость', 'Масло быстро впитывается, не оставляя липкости.']],
  ingredients: [['Миндальное масло', 'Смягчает кожу и помогает вернуть ощущение комфорта сухим участкам.'], ['Масло ши', 'Питает кожу, смягчает шероховатость и поддерживает ощущение защищённости.'], ['Сквалан', 'Помогает поддерживать мягкость, гладкость и комфорт кожи.'], ['Холестерол', 'Компонент, близкий липидному барьеру кожи. Помогает поддерживать ощущение плотности и устойчивости.'], ['Экстракт чёрной смородины', 'Дополняет формулу уходом для кожи, склонной к сухости, стянутости и тусклости.']]
}, {
  id: 'recharge',
  name: 'RECHARGE',
  state: 'Потеря тонуса и гладкости',
  tagline: 'Тонус и эластичность',
  short: 'Для самомассажа и более гладкого, ухоженного и собранного вида кожи.',
  zones: ['Бёдра', 'Ягодицы', 'Живот', 'Грудь', 'Руки'],
  color: 'var(--rdm-recharge)',
  img: '../../assets/imagery/recharge.jpg',
  still: '../../assets/imagery/recharge-ingredients.jpg',
  keys: 'Amaranth, Ginger & Soybean oil',
  lead: 'Сухое масло для ежедневного ухода и самомассажа зон, где коже хочется больше гладкости, упругости и собранного вида. Питательные масла смягчают кожу, а экстракты имбиря и амаранта дополняют уход, направленный на поддержание тонуса.',
  facts: ['Быстро впитывается', 'Для ежедневного ухода', 'Подходит для самомассажа'],
  when: 'Когда кожа выглядит менее гладкой и упругой или хочется добавить в ежедневный уход короткий массажный ритуал.',
  fits: ['для бёдер, ягодиц, живота, груди и рук;', 'для утреннего ухода после душа;', 'когда коже не хватает визуального тонуса;', 'когда хочется подчеркнуть гладкость и ухоженный вид тела.'],
  note: 'Масло даёт достаточно скольжения для массажа, а после впитывания не оставляет ощущения жирности.',
  benefits: [['Гладкость', 'Питательные масла смягчают кожу и делают её более ровной на ощупь.'], ['Эластичность', 'Регулярный уход помогает поддерживать ощущение упругой и ухоженной кожи.'], ['Тонус', 'Массаж и направленная формула помогают коже выглядеть более собранной.'], ['Сатиновый финиш', 'Масло подчёркивает гладкость тела без липкости и жирной плёнки.']],
  ingredients: [['Масло сои', 'Смягчает кожу и помогает поддерживать ощущение комфорта.'], ['Масло абрикосовой косточки', 'Питает, делает кожу более гладкой и приятной на ощупь.'], ['Масло камелии', 'Поддерживает эластичность и визуальную гладкость кожи.'], ['Экстракт имбиря', 'Добавляет формуле направленность на ощущение тонуса и свежести кожи.'], ['Экстракт амаранта', 'Поддерживает ощущение мягкости, гладкости и ухоженности.']]
}, {
  id: 'escape',
  name: 'ESCAPE',
  state: 'Неровная текстура',
  tagline: 'Баланс и ровная текстура',
  short: 'Для зон, склонных к неровной текстуре и чувствительности после трения, спорта или удаления волос.',
  zones: ['Спина', 'Плечи', 'Руки', 'Зона декольте'],
  color: 'var(--rdm-escape)',
  img: '../../assets/imagery/escape.jpg',
  still: '../../assets/imagery/escape-ingredients.jpg',
  keys: 'Neem Oil, Willow Bark & Witch Hazel',
  lead: 'Сухое масло для участков тела, склонных к неровной текстуре и чувствительности. Масло нима, экстракты ивы, гамамелиса и арники поддерживают комфорт кожи и помогают ей выглядеть более гладкой и ухоженной.',
  facts: ['Для регулярного ухода', 'Без ощущения жирной плёнки'],
  when: 'Когда отдельные участки тела становятся неровными, чувствительными или реагируют на трение одежды, спорт, бритьё и депиляцию.',
  fits: ['для спины, плеч и зоны декольте;', 'для рук с неровной текстурой;', 'для участков, контактирующих с плотной одеждой;', 'для ухода за кожей после спорта.'],
  note: 'Лёгкая текстура позволяет использовать масло регулярно, не оставляя ощущения тяжести.',
  benefits: [['Ровная текстура', 'Кожа постепенно ощущается более гладкой и ухоженной.'], ['Комфорт', 'Формула поддерживает участки, склонные к чувствительности.'], ['Баланс', 'Лёгкая текстура подходит для зон, которые не хочется перегружать насыщенным уходом.'], ['Сухой финиш', 'Масло быстро распределяется и не оставляет липкой плёнки.']],
  ingredients: [['Масло нима', 'Подходит для ухода за кожей, склонной к несовершенствам и неровной текстуре.'], ['Экстракт коры белой ивы', 'Поддерживает мягкое обновление поверхности кожи и ощущение более ровной текстуры.'], ['Экстракт гамамелиса', 'Помогает сохранить ощущение свежести и баланса кожи.'], ['Экстракт арники', 'Дополняет формулу уходом для кожи, которой нужен комфорт после нагрузки, трения или воздействия внешних факторов.']]
}, {
  id: 'weightless',
  name: 'WEIGHTLESS',
  state: 'Тяжесть и напряжение',
  tagline: 'Расслабление и лёгкость',
  short: 'После долгого дня, нагрузки или дороги — когда телу хочется прохлады и ощущения лёгкости.',
  zones: ['Икры', 'Ступни', 'Трапеция'],
  color: 'var(--rdm-weightless)',
  img: '../../assets/imagery/weightless.jpg',
  still: '../../assets/imagery/weightless-ingredients.jpg',
  keys: 'Almond oil, Menthyl Lactate & Cornflower',
  lead: 'Сухое масло с мягким охлаждающим эффектом для моментов, когда тело ощущает тяжесть и напряжение. Подходит для икр, ступней, голеней и области трапеции после долгого дня, тренировки или жары.',
  facts: ['Мягкий охлаждающий эффект', 'Для вечернего самомассажа'],
  when: 'Когда после активного дня телу хочется прохлады, лёгкости и переключения в более спокойное состояние.',
  fits: ['после долгого дня на ногах;', 'после тренировки или прогулки;', 'в жаркую погоду;', 'для вечернего массажа икр и ступней.'],
  note: 'Масло сочетает мягкий охлаждающий эффект и уход за кожей, не оставляя тяжёлой жирной плёнки.',
  benefits: [['Прохлада', 'Ментил лактат и ментол создают постепенный освежающий эффект.'], ['Лёгкость', 'Массаж помогает переключить внимание на участки, в которых накопилось ощущение тяжести.'], ['Расслабление', 'Ритуал нанесения становится спокойным завершением активного дня.'], ['Мягкость', 'Растительные масла смягчают кожу и оставляют гладкий сатиновый финиш.']],
  ingredients: [['Ментил лактат', 'Даёт мягкое и более продолжительное ощущение прохлады.'], ['Ментол', 'Добавляет быстрый освежающий эффект и ощущение лёгкости.'], ['Масло миндаля', 'Смягчает кожу и помогает поддерживать ощущение комфорта.'], ['Экстракт василька', 'Дополняет формулу успокаивающим уходом и ощущением свежести.']]
}, {
  id: 'balance',
  name: 'BALANCE',
  sub: 'SPF 20',
  state: 'Тусклый и неровный вид',
  tagline: 'Ровный тон и сатиновый финиш',
  short: 'Когда хочется, чтобы кожа сразу выглядела более гладкой, ровной и ухоженной.',
  zones: ['Руки', 'Плечи', 'Зона декольте', 'Ноги'],
  color: 'var(--rdm-balance)',
  img: '../../assets/imagery/balance.jpg',
  still: '../../assets/imagery/balance-ingredients.jpg',
  keys: 'Pearl Powder & Celery, spf 20',
  lead: 'Cухое масло для открытых участков тела. Помогает коже выглядеть более гладкой и ровной, придаёт деликатное свечение и сочетает ежедневный уход с защитой SPF 20.',
  facts: ['Быстро впитывается', 'Без липкости', 'Деликатное свечение', 'Фирменный аромат'],
  when: 'Когда хочется, чтобы открытые участки тела выглядели более ровными, гладкими и ухоженными в течение дня.',
  fits: ['если кожа выглядит тусклой или неоднородной;', 'перед выходом, встречей или событием;', 'для одежды с открытыми руками, плечами или зоной декольте;', 'для ежедневного ухода за открытыми участками тела в городе.'],
  note: 'Это не только сезонное масло для солнца. SPF 20 дополняет формулу, а сатиновый финиш и визуально более ровный тон остаются актуальными в любое время года.',
  benefits: [['Ровный тон', 'Кожа визуально выглядит более однородной и ухоженной.'], ['Деликатное свечение', 'Жемчужная пудра создаёт мягкий эффект отражения света без заметного блеска.'], ['Сатиновый финиш', 'Масло подчёркивает гладкость кожи и не оставляет жирной плёнки.'], ['Дневной уход', 'УФ-фильтры помогают защищать открытые участки тела в пределах заявленного SPF 20.']],
  ingredients: [['Экстракт сельдерея', 'Поддерживает визуально более ровный тон кожи.'], ['Жемчужная пудра', 'Придаёт коже деликатное свечение и ухоженный сатиновый финиш.'], ['Коэнзим Q10 и витамин Е', 'Дополняют формулу антиоксидантной поддержкой.'], ['УФ-фильтры SPF 20', 'Помогают защищать кожу от солнечного излучения в пределах заявленного уровня SPF.']]
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ZoneList = __ds_scope.ZoneList;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.BenefitGrid = __ds_scope.BenefitGrid;

__ds_ns.IngredientList = __ds_scope.IngredientList;

__ds_ns.ProductCard = __ds_scope.ProductCard;

})();
