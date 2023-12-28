type response = {
    error: boolean;
    value: any;
    message?:string;
};

  
export default function validate(file:Express.Multer.File | undefined):response{
    if(file === undefined) return { error:true, value:file } 
    if(file.size > 1000000) return { error:true, value:file, message:'very large file' } 
    if(file.mimetype !== 'application/pdf')  return { error:true, value:file, message:'invalid file' } 
    return { error:false, value:file }   
}