package main

import (
	"github.com/gin-gonic/gin"
	"github.com/pbatomic/templcomponents/components"
)

func main() {
	// init http server
	r := gin.Default()
	r.GET("/", handleMain)
	r.Run(":8080")
}

func handleMain(c *gin.Context) {
	components.Landing().Render(c, c.Writer)
}
