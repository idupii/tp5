<?php
   namespace app\plugin\model;
   use think\Model;

   class Article extends Model {
      public function page($nodeid, $cp, $mp) {
        $article = $this->where("nodeid", $nodeid)->select();
        return $article;
      }
   }
