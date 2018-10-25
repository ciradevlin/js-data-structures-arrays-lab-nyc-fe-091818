// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) { 
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) { 
  drivers.pop(name) 
}

function destructivelyRemoveFirstDriver(name) { 
  drivers.shift(name)
}

function appendDriver(name) {

const copyDrivers = drivers.slice ()

copyDrivers.push(name)
return copyDrivers

}

function prependDriver(name) { 
  const copyDrivers = drivers.slice ()
  copyDrivers.unshift(name)
  return copyDrivers
}

