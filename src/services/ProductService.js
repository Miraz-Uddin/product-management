import Product, { getCollectionName } from "../models/Product.js";

const collection = getCollectionName();
const Model = Product;

export async function Search(filter = {}, selected = "") {
  let status = "failed";
  let code = 400;
  let message = "";
  let data = {};

  try {
    const response = await Model.find(filter)
      .select(selected)
      .then((result) => {
        status = "success";
        code = 200;
        message = result ? `${collection} Found` : `No ${collection} Found`;
        data = { total: result?.length, data: result };
      })
      .catch((err) => {
        message = err?.message;
        data = err;
      });
  } catch (error) {
    console.log(error);
    message = `Error while finding ${collection}s Data`;
  }
  return {
    code,
    status,
    message,
    data,
  };
}

export async function SearchById(id, selected = "") {
  let status = "failed";
  let code = 400;
  let message = "";
  let data = {};
  try {
    const response = await Model.findById(id)
      .select(selected)
      .then((result) => {
        status = "success";
        code = 200;
        message = result ? `${collection} Found` : `No ${collection} Found`;
        data = {
          total: result?.length,
          data: result,
        };
      })
      .catch((err) => {
        message = err?.message;
        data = err;
      });
  } catch (error) {
    console.log(error);
    message = `Error while finding ${collection}'s Data`;
  }
  return {
    code,
    status,
    message,
    data,
  };
}

export async function Store(newEntity) {
  let status = "failed";
  let code = 400;
  let message = "";
  let data = {};
  try {
    const response = await Model.create(newEntity)
      .then((result) => {
        status = "success";
        code = 201;
        message = `${collection} Created Successfully`;
        data = { data: result };
      })
      .catch((err) => {
        message = err?.message;
        data = err;
      });
  } catch (error) {
    console.log(error);
    message = `${collection} Creation Failed`;
  }
  return {
    code,
    status,
    message,
    data,
  };
}

export async function Modify(filter, updatedEntities) {
  let status = "failed";
  let code = 400;
  let message = "";
  let data = {};
  try {
    const response = await Model.findOneAndUpdate(filter, updatedEntities, {
      new: true,
    })
      .then((result) => {
        status = "success";
        code = 200;
        message = `Existing ${collection} Updated Successfully`;
        data = { data: result };
      })
      .catch((err) => {
        message = err?.message;
        data = err;
      });
  } catch (error) {
    console.log(error);
    message = `Existing ${collection} Update Failed`;
  }
  return {
    code,
    status,
    message,
    data,
  };
}

export async function Delete(filter) {
  let status = "failed";
  let code = 400;
  let message = "";
  let data = {};
  try {
    const response = await Model.deleteOne(filter)
      .then((result) => {
        const { acknowledged, deletedCount } = result || {};
        if (acknowledged && deletedCount === 1) {
          status = "success";
          code = 200;
          message = `${collection} Deleted Successfully`;
          data = { deletedId: filter?._id };
        } else {
          status = "failed";
          code = 404;
          message = `${collection} Not Exists !!`;
          data = {};
        }
      })
      .catch((err) => {
        message = err?.message;
        data = err;
      });
  } catch (error) {
    console.log(error);
    message = `${collection} Delete Failed`;
  }
  return {
    code,
    status,
    message,
    data,
  };
}
