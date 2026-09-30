// Phase 2 Core Drawing Skills source/output contract.
// Approved sources are pinned; WebP files are generated before dev/test/build.
// brand.mode:
// - source: approved source already contains the canonical brand lockup
// - band: add a canonical brand rail above the approved artwork
// - overlay: cover a legacy/small mark and composite the canonical lockup in place
export const coreAssetManifest = [
  {
    "slug": "hands-simple-forms",
    "sourceChunks": [
      "assets/core/hands-v2.b64/01.txt",
      "assets/core/hands-v2.b64/02.txt",
      "assets/core/hands-v2.b64/03.txt",
      "assets/core/hands-v2.b64/04.txt",
      "assets/core/hands-v2.b64/05.txt",
      "assets/core/hands-v2.b64/06.txt",
      "assets/core/hands-v2.b64/07.txt",
      "assets/core/hands-v2.b64/08.txt",
      "assets/core/hands-v2.b64/09.txt",
      "assets/core/hands-v2.b64/10.txt"
    ],
    "sourceBytes": 148768,
    "sourceSha256": "195edf005d1765d0adc4278bf9017088b7087809b5fa13f9abeec0caf13e43ad",
    "outputPath": "public/infographics/core/hands-simple-forms.webp",
    "width": 900,
    "height": 1350,
    "format": "webp",
    "brand": {
      "mode": "source",
      "canonical": "public/branding/g-art-lockup.svg",
      "placement": "upper-left"
    }
  },
  {
    "slug": "eye-structure",
    "sourceChunks": [
      "assets/core/eye-v2.b64/01.txt",
      "assets/core/eye-v2.b64/02.txt",
      "assets/core/eye-v2.b64/03.txt",
      "assets/core/eye-v2.b64/04.txt",
      "assets/core/eye-v2.b64/05.txt",
      "assets/core/eye-v2.b64/06.txt",
      "assets/core/eye-v2.b64/07.txt",
      "assets/core/eye-v2.b64/08.txt"
    ],
    "sourceBytes": 495832,
    "sourceSha256": "37526ddfcbe1181641193fe951e9940714916f2a518085ddb7ec3846fac78de2",
    "outputPath": "public/infographics/core/eye-structure.webp",
    "width": 900,
    "height": 1450,
    "format": "webp",
    "brand": {
      "mode": "band",
      "canonical": "public/branding/g-art-lockup.svg",
      "placement": "upper-left",
      "bandHeight": 100,
      "logoWidth": 260,
      "left": 24,
      "top": 18,
      "background": "#FBF7EF"
    }
  },
  {
    "slug": "hair-masses",
    "sourceChunks": ["assets/core/hair-masses.b64"],
    "sourceBytes": 139234,
    "sourceSha256": "96265cd38ea1a7fdfc72eedaefdab333a56f3d0ae87cfda7b7ced0a2053b4813",
    "outputPath": "public/infographics/core/hair-masses.webp",
    "width": 900,
    "height": 1300,
    "format": "webp",
    "brand": {
      "mode": "band",
      "canonical": "public/branding/g-art-lockup.svg",
      "placement": "upper-left",
      "bandHeight": 100,
      "logoWidth": 260,
      "left": 24,
      "top": 18,
      "background": "#FBF7EF",
      "artPlate": {
        "left": 755,
        "top": 70,
        "width": 135,
        "height": 60,
        "background": "#FBF7EF"
      }
    }
  },
  {
    "slug": "fabric-tension-gravity",
    "sourceChunks": [
      "assets/core/fabric-v1.b64/01.txt",
      "assets/core/fabric-v1.b64/02.txt",
      "assets/core/fabric-v1.b64/03.txt",
      "assets/core/fabric-v1.b64/04.txt",
      "assets/core/fabric-v1.b64/05.txt",
      "assets/core/fabric-v1.b64/06.txt"
    ],
    "sourceBytes": 375710,
    "sourceSha256": "f391b18060466e38003eb8dbf653299ee5578d4dafc0ee0bbe72efb3b1d60877",
    "outputPath": "public/infographics/core/fabric-tension-gravity.webp",
    "width": 900,
    "height": 1350,
    "format": "webp",
    "brand": {
      "mode": "overlay",
      "canonical": "public/branding/g-art-lockup.svg",
      "placement": "upper-left",
      "logoWidth": 195,
      "left": 15,
      "top": 10,
      "plate": {
        "left": 10,
        "top": 7,
        "width": 205,
        "height": 78,
        "background": "#FBF7EF"
      }
    }
  },
  {
    "slug": "fabric-one-support",
    "sourceChunks": [
      "assets/core/fabric-one-support.b64/01.txt",
      "assets/core/fabric-one-support.b64/02.txt",
      "assets/core/fabric-one-support.b64/03.txt",
      "assets/core/fabric-one-support.b64/04.txt",
      "assets/core/fabric-one-support.b64/05.txt"
    ],
    "sourceBytes": 274120,
    "sourceSha256": "8510e59627a9bc5c6f7a88564a2b713e19863873a2718ea33a43846af53adf9a",
    "outputPath": "public/infographics/core/fabric-one-support.webp",
    "width": 900,
    "height": 1224,
    "format": "webp",
    "brand": {
      "mode": "band",
      "canonical": "public/branding/g-art-lockup.svg",
      "placement": "upper-left",
      "bandHeight": 100,
      "logoWidth": 240,
      "left": 24,
      "top": 18,
      "background": "#FBF7EF"
    }
  },
  {
    "slug": "fabric-two-tension",
    "sourceChunks": [
      "assets/core/fabric-two-tension.b64/01.txt",
      "assets/core/fabric-two-tension.b64/02.txt",
      "assets/core/fabric-two-tension.b64/03.txt",
      "assets/core/fabric-two-tension.b64/04.txt",
      "assets/core/fabric-two-tension.b64/05.txt"
    ],
    "sourceBytes": 312770,
    "sourceSha256": "60001022cf03f56b235d2c60da92fd646910597d93c4d42d69fd5c68207fa567",
    "outputPath": "public/infographics/core/fabric-two-tension.webp",
    "width": 900,
    "height": 1224,
    "format": "webp",
    "brand": {
      "mode": "band",
      "canonical": "public/branding/g-art-lockup.svg",
      "placement": "upper-left",
      "bandHeight": 100,
      "logoWidth": 240,
      "left": 24,
      "top": 18,
      "background": "#FBF7EF"
    }
  },
  {
    "slug": "fabric-compression-bend",
    "sourceChunks": [
      "assets/core/fabric-compression-bend.b64/01.txt",
      "assets/core/fabric-compression-bend.b64/02.txt",
      "assets/core/fabric-compression-bend.b64/03.txt",
      "assets/core/fabric-compression-bend.b64/04.txt",
      "assets/core/fabric-compression-bend.b64/05.txt"
    ],
    "sourceBytes": 260804,
    "sourceSha256": "653cdd3ab174bc838ef3cca4b5ef6ee04bda50effdd54d4b1663d5d949de1cdc",
    "outputPath": "public/infographics/core/fabric-compression-bend.webp",
    "width": 900,
    "height": 1450,
    "format": "webp",
    "brand": {
      "mode": "band",
      "canonical": "public/branding/g-art-lockup.svg",
      "placement": "upper-left",
      "bandHeight": 100,
      "logoWidth": 240,
      "left": 24,
      "top": 18,
      "background": "#FBF7EF"
    }
  },
  {
    "slug": "fabric-wrap-overlap",
    "sourceChunks": [
      "assets/core/fabric-wrap-overlap.b64/01.txt",
      "assets/core/fabric-wrap-overlap.b64/02.txt",
      "assets/core/fabric-wrap-overlap.b64/03.txt",
      "assets/core/fabric-wrap-overlap.b64/04.txt",
      "assets/core/fabric-wrap-overlap.b64/05.txt",
      "assets/core/fabric-wrap-overlap.b64/06.txt"
    ],
    "sourceBytes": 368890,
    "sourceSha256": "9437858a86a7e4f73665483cf655c56b70fa53ab14dc795fb32288ddae5ea623",
    "outputPath": "public/infographics/core/fabric-wrap-overlap.webp",
    "width": 1200,
    "height": 900,
    "format": "webp",
    "brand": {
      "mode": "band",
      "canonical": "public/branding/g-art-lockup.svg",
      "placement": "upper-left",
      "bandHeight": 100,
      "logoWidth": 240,
      "left": 24,
      "top": 18,
      "background": "#FBF7EF",
      "artPlate": {
        "left": 1025,
        "top": 0,
        "width": 175,
        "height": 78,
        "background": "#FBF7EF"
      }
    }
  }
];
