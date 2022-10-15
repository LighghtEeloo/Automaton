<script lang="ts">
  import Block from "./lib/blocks";
  let w = 256;
  let h = 256;
  let blockss = [];
  blockss.push(Block.init(w));
  for (let j = 1; j < h; j++) {
    blockss.push(Block.iter(blockss[j - 1], w, j));
  }
  let unit = 10;
</script>

<main>
  {#each blockss as blocks}
    {#each blocks as block}
      <div
        class="block"
        style:background-color={block.color ? "white" : "black"}
        style:width="{unit}px"
        style:height="{unit}px"
        style:left="{block.x * (unit + 2)}px"
        style:top="{block.y * (unit + 2)}px"
      />
    {/each}
  {/each}
</main>

<style>
  main {
    position: relative;
    /* align-self: center; */
    width: 100%;
    height: 100%;
  }
</style>
