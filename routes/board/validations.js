const Joi = require("joi");

module.exports = {
  get: {
    getById: {
      params: {
        id: Joi.number()
          .integer()
          .required()
      }
    }
  },
  post: {
    create: {
      body: {
        name: Joi.string()
          .max(255)
          .required(),
        color: Joi.string()
          .max(255)
          .required(),
        description: Joi.string()
          .max(255)
          .allow("", null)
      }
    }
  },
  put: {
    update: {
      params: {
        id: Joi.number()
          .integer()
          .required()
      },
      body: {
        name: Joi.string().max(255),
        color: Joi.string().max(255),
        description: Joi.string()
          .max(255)
          .allow("", null)
      }
    }
  }
  // delete: {
  //     dismissById: {
  //         params: {
  //             id: Joi.number()
  //                 .integer()
  //                 .required(),
  //         },
  //     },
  //     dismissBuyingOpportunity: {
  //         query: {
  //             artistId: Joi.number()
  //                 .integer()
  //                 .required(),
  //         },
  //     },
  //     dismissUnprocessed: {
  //         query: {
  //             userId: Joi.objectId().required(),
  //         },
  //     },
  // },
};
