'use strict';

var Mt = require("./mt.js");
var Block = require("../../lib/js/block.js");
var Curry = require("../../lib/js/curry.js");
var Caml_oo_curry = require("../../lib/js/caml_oo_curry.js");
var CamlinternalOO = require("../../lib/js/camlinternalOO.js");

var shared = /* array */[
  "hi",
  "hello"
];

var shared$1 = /* array */[
  "hi",
  "add"
];

var $$class = CamlinternalOO.create_table(shared);

var ids = CamlinternalOO.get_method_labels($$class, shared);

var hi = ids[0];

var hello = ids[1];

CamlinternalOO.set_methods($$class, /* array */[
      hi,
      (function (self$1, x, y) {
          return x + y | 0;
        }),
      hello,
      (function (self$1, z) {
          return Curry._3(self$1[0][hi], self$1, 10, z);
        })
    ]);

CamlinternalOO.init_class($$class);

var vv = CamlinternalOO.create_object_opt(0, $$class);

var $$class$1 = CamlinternalOO.create_table(/* array */[
      "x",
      "y"
    ]);

var ids$1 = CamlinternalOO.get_method_labels($$class$1, /* array */[
      "y",
      "x"
    ]);

var y = ids$1[0];

var x = ids$1[1];

CamlinternalOO.set_methods($$class$1, /* array */[
      x,
      (function (self$2) {
          return 3;
        }),
      y,
      (function (self$2) {
          return 32;
        })
    ]);

CamlinternalOO.init_class($$class$1);

var v = CamlinternalOO.create_object_opt(0, $$class$1);

var $$class$2 = CamlinternalOO.create_table(/* array */[
      "hi",
      "id1",
      "id2",
      "hello"
    ]);

var ids$2 = CamlinternalOO.get_method_labels($$class$2, /* array */[
      "id2",
      "id1",
      "hi",
      "hello"
    ]);

var id2 = ids$2[0];

var id1 = ids$2[1];

var hi$1 = ids$2[2];

var hello$1 = ids$2[3];

CamlinternalOO.set_methods($$class$2, /* array */[
      hi$1,
      (function (self$3, v, z) {
          return v + z | 0;
        }),
      id1,
      (function (self$3) {
          return 3;
        }),
      id2,
      (function (self$3) {
          return 4;
        }),
      hello$1,
      (function (self$3, v) {
          return v;
        })
    ]);

CamlinternalOO.init_class($$class$2);

var u = CamlinternalOO.create_object_opt(0, $$class$2);

var $$class$3 = CamlinternalOO.create_table(/* array */["id"]);

var id = CamlinternalOO.get_method_label($$class$3, "id");

CamlinternalOO.set_method($$class$3, id, (function (self$4) {
        return "uu";
      }));

CamlinternalOO.init_class($$class$3);

var uu = CamlinternalOO.create_object_opt(0, $$class$3);

var $$class$4 = CamlinternalOO.create_table(/* array */["add"]);

var add = CamlinternalOO.get_method_label($$class$4, "add");

CamlinternalOO.set_method($$class$4, add, (function (self$5, x, y) {
        return x + y | 0;
      }));

CamlinternalOO.init_class($$class$4);

var uuu = CamlinternalOO.create_object_opt(0, $$class$4);

var $$class$5 = CamlinternalOO.create_table(shared$1);

var ids$3 = CamlinternalOO.get_method_labels($$class$5, shared$1);

var hi$2 = ids$3[0];

var add$1 = ids$3[1];

CamlinternalOO.set_methods($$class$5, /* array */[
      add$1,
      (function (self$6, x, y) {
          return x + y | 0;
        }),
      hi$2,
      (function (self$6, x) {
          return Curry._3(self$6[0][add$1], self$6, x, 32);
        })
    ]);

CamlinternalOO.init_class($$class$5);

var vvvv = CamlinternalOO.create_object_opt(0, $$class$5);

var suites_000 = /* tuple */[
  "single_obj",
  (function (param) {
      return /* Eq */Block.__(0, [
                /* array */[
                  3,
                  32
                ],
                /* array */[
                  Caml_oo_curry.js1(120, 1, v),
                  Caml_oo_curry.js1(121, 2, v)
                ]
              ]);
    })
];

var suites_001 = /* :: */[
  /* tuple */[
    "single_obj_cache",
    (function (param) {
        return /* Eq */Block.__(0, [
                  /* array */[
                    3,
                    32
                  ],
                  /* array */[
                    Caml_oo_curry.js1(120, 3, v),
                    Caml_oo_curry.js1(121, 4, v)
                  ]
                ]);
      })
  ],
  /* :: */[
    /* tuple */[
      "self_obj",
      (function (param) {
          return /* Eq */Block.__(0, [
                    13,
                    Caml_oo_curry.js2(616641298, 5, vv, 3)
                  ]);
        })
    ],
    /* :: */[
      /* tuple */[
        "uu_id",
        (function (param) {
            return /* Eq */Block.__(0, [
                      "uu",
                      Caml_oo_curry.js1(23515, 6, uu)
                    ]);
          })
      ],
      /* :: */[
        /* tuple */[
          "uu_add",
          (function (param) {
              return /* Eq */Block.__(0, [
                        Caml_oo_curry.js3(4846113, 7, uuu, 1, 20),
                        21
                      ]);
            })
        ],
        /* :: */[
          /* tuple */[
            "v_add",
            (function (param) {
                return /* Eq */Block.__(0, [
                          Caml_oo_curry.js3(4846113, 8, vvvv, 3, 7),
                          10
                        ]);
              })
          ],
          /* :: */[
            /* tuple */[
              "u_id1",
              (function (param) {
                  return /* Eq */Block.__(0, [
                            Caml_oo_curry.js1(5243894, 9, u),
                            3
                          ]);
                })
            ],
            /* :: */[
              /* tuple */[
                "u_id2",
                (function (param) {
                    return /* Eq */Block.__(0, [
                              Caml_oo_curry.js1(5243895, 10, u),
                              4
                            ]);
                  })
              ],
              /* :: */[
                /* tuple */[
                  "u hi",
                  (function (param) {
                      return /* Eq */Block.__(0, [
                                Caml_oo_curry.js3(23297, 11, u, 1, 2),
                                3
                              ]);
                    })
                ],
                /* :: */[
                  /* tuple */[
                    "u hello",
                    (function (param) {
                        return /* Eq */Block.__(0, [
                                  Caml_oo_curry.js2(616641298, 12, u, 32),
                                  32
                                ]);
                      })
                  ],
                  /* :: */[
                    /* tuple */[
                      "v hi",
                      (function (param) {
                          return /* Eq */Block.__(0, [
                                    Caml_oo_curry.js2(23297, 13, vvvv, 31),
                                    63
                                  ]);
                        })
                    ],
                    /* :: */[
                      /* tuple */[
                        "uuu add",
                        (function (param) {
                            return /* Eq */Block.__(0, [
                                      Caml_oo_curry.js3(4846113, 14, uuu, 3, 4),
                                      7
                                    ]);
                          })
                      ],
                      /* :: */[
                        /* tuple */[
                          "v x",
                          (function (param) {
                              return /* Eq */Block.__(0, [
                                        Caml_oo_curry.js1(120, 15, v),
                                        3
                                      ]);
                            })
                        ],
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
];

var suites = /* :: */[
  suites_000,
  suites_001
];

Mt.from_pair_suites("Obj_test", suites);

exports.vv = vv;
exports.v = v;
exports.u = u;
exports.uu = uu;
exports.uuu = uuu;
exports.vvvv = vvvv;
exports.suites = suites;
/* class Not a pure module */
