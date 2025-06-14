const asyncHandler =(requestHandler) =>{     //function return another function
 return(req,res,next) => {
  Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err));
 };
};

export{asyncHandler};