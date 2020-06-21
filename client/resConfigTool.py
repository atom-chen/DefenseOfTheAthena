import os
basePath = ".\\assets\\resources"
outFile = ".\\assets\\script\\framework\\res\\ResPath.ts"
exPaths=["Animation/"]
fileCategorys = [".png", ".PNG", ".jpg", ".mp3", ".wav", ".prefab", ".anim", ".labelatlas"]

lines = []


def makeResDict():
    print("Read Name And Path Start!")

    for (path, dirs, files) in os.walk(basePath):
        for filename in files:
            if filename.find(".meta") != -1:
                continue

            resName = ""
            for oneCategory in fileCategorys:
                if filename.find(oneCategory) != -1:
                    nameArr = filename.split(".")
                    resName = nameArr[0]
                    break

            if resName == "":
                continue

            #startIndex = path.index(".") + 7

            resPath = path.replace("\\", "/")
            resPath = resPath.replace("./assets/resources/", "")

            resPath = resPath + "/" + resName

            line = "\t" + resName + " : \"" + resPath + "\",\n"
            if line in lines:
                print("Read Name And Path Error!, res name repeat!  >>>" + resName)
                return False

            if isExPath(resPath)==False:
                lines.append(line)
            
    print("Read Name And Path Success!")
    return True

def isExPath(p):
    for ex in exPaths:
        if(p.find(ex)>=0):
            return True
    return False


def writeFile():
    print("Write Name And Path Start!")
    dst = open(outFile, 'w', encoding='utf-8')
    dst.write("export let ResPath = {\n")
    for line in lines:
        dst.write(line)
        print(line)
    dst.write("}")
    print("Write Name And Path Success!")
    dst.close()


def main():
    isOk = makeResDict()
    if isOk:
        lines.sort()
        writeFile()

    os.system('pause & exit')


if __name__ == '__main__':
    main()
