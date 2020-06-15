# typescript-crash-course
learning typescript from scratch

# Typescript core types

number
string
object
array
enum
any



# Typescript other types

union type -> symbol type | type
literal type -> 'type'

# Function return type and void

make function strict returning a certain type 
fuction returning 0 means fuction is returning void

# Function Types

you can give a variable a type of Function, to accept only function as a value with a specific function return type

# Function Types and callbacks

you can declare a function that accept paremeters of a certain type and a callback function that return function type
so that in the future use, callback will only return what function type allows to.

# Unknown Type

unknow type looks almost similar to any type but it is more restricitive than any
it require to double check which current variable type before taking action

# Never Type

# Watch Node

helps to auto recompile you ts codes

# include and exclude files

you can configure tsc in your tsconfig.json which files to include in compilation or exclude in your compilation

# setting a compilation target  
 
 allow you to set the target version of javascript in the compiler options, so that tsc will generate equivalent version