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
    "height": 1200,
    "format": "webp",
    "brand": {
      "mode": "overlay",
      "canonical": "public/branding/g-art-lockup.svg",
      "placement": "upper-right-layout-exception",
      "logoWidth": 190,
      "left": 690,
      "top": 56,
      "plate": {
        "left": 680,
        "top": 48,
        "width": 210,
        "height": 76,
        "background": "#FBF7EF"
      }
    }
  }
];
