const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	fs.writeFile(fileName, fileContent, (error)=>{
		if(error){
			console.log(error)
		}else{
			console.log("write successfully done")
		}
	} )
}

const myFileReader = async (fileName) => {
	const fRead=fs.readFile(fileName)
	return (await fRead).toString()
}


const myFileUpdater = async (fileName, fileContent) => {
	await fs.appendFile(fileName, fileContent, (error)=>{
		if(error){console.log(error)}
		console.log("update successsfully done")
	})
}

const myFileDeleter = async (fileName) => {
	await fs.unlink(fileName,(error)=>{
		if (error){
			console.log(error)
		}
		console.log("delete successfully done")
	})
}
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
