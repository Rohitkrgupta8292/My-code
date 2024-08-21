import fs from "fs/promises"
import fsn from "fs"
import path from "path"
// console.log(fs)
const basepath = "C:\\Users\\rohit kumar gupta\\OneDrive\\Documents\\GitHub\\My-code\\web_development\\video_93"
let files = await fs.readdir(basepath)
for (const item of files) {
    let ext = item.split(".")[item.split(".").length - 1]
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {
        if (fsn.existsSync(path.join(basepath, ext))) {
            // move this file to directory
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }
}
