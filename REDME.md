# Deno example codes

### cat

REF: https://deno.land/manual/examples/unix_cat
```zsh
echo "hello world cat" > test.txt

deno run --allow-read cat.ts test.txt
# Compile file:///Users/namikishun/Develop/sandbox/example-deno/cat.ts
# hello world cat
```

### watcher

REF: https://deno.land/manual/examples/file_system_events

```zsh
deno run --allow-read watcher.ts

# watch this directory
```

### api

```zsh
# Terminal1
$ deno run --allow-read

# Terminal2
$ curl -X POST http://localhost:8000/todos
# > 880
### generate random id and file

$ cat 880.txt
This is todo itm.
ID is 880.
```