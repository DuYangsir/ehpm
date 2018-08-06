const inquirer = require('inquirer')
const process = require('child_process')

inquirer.prompt([{
  type: 'list',
  name: 'iphoneType',
  message: 'Please select an iphone for simulator...',
  choices: ['iphone-6', 'iphone-6-plus', 'iphone-8'],
  default: 0
}]).then((answers) => {
  console.log(`you have select: \n${answers.iphoneType}`)
  switch(answers.iphoneType) {
    case 'iphone-6': {
      process.exec('xcrun instruments -w \'iphone 6\'')
      break
    }
    case 'iphone-6-plus': {
      process.exec('xcrun instruments -w \'iphone 6 Plus\'')
      break
    }
    case 'iphone-8': {
      process.exec('xcrun instruments -w \'iphone 8\'')
      break
    }
  }
})

// install
// xcrun simctl install booted xxx.app

// uninstall
// xcrun simctl uninstall booted com.xxx.xxx

// xcrun --help