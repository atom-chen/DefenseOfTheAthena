package logic

import "fmt"

const (
	AoiMinX  int = 85
	AoiMaxX  int = 410
	AoiCntsX int = 10
	AoiMinY  int = 75
	AoiMaxY  int = 400
	AoiCntsY int = 20
)

/*
   AOI管理模块
*/
type AOIManager struct {
	MinX   int           //区域左边界坐标
	MaxX   int           //区域右边界坐标
	CountX int           //x方向格子的数量
	MinY   int           //区域上边界坐标
	MaxY   int           //区域下边界坐标
	CountY int           //y方向的格子数量
	Grids  map[int]*Grid //当前区域中都有哪些格子，key=格子ID， value=格子对象
}

/*
	初始化一个AOI区域
*/
func NewAOIManager() *AOIManager {
	aoiMgr := &AOIManager{
		MinX:   AoiMinX,
		MaxX:   AoiMaxX,
		CountX: AoiCntsX,
		MinY:   AoiMinY,
		MaxY:   AoiMaxY,
		CountY: AoiCntsY,
		Grids:  make(map[int]*Grid),
	}

	//给AOI初始化区域中所有的格子
	for y := 0; y < AoiCntsX; y++ {
		for x := 0; x < AoiCntsX; x++ {
			//计算格子ID
			//格子编号：id = idy *nx + idx  (利用格子坐标得到格子编号)
			gid := y*AoiCntsX + x

			//初始化一个格子放在AOI中的map里，key是当前格子的ID
			aoiMgr.Grids[gid] = NewGrid(gid,
				aoiMgr.MinX+x*aoiMgr.gridWidth(),
				aoiMgr.MinX+(x+1)*aoiMgr.gridWidth(),
				aoiMgr.MinY+y*aoiMgr.gridLength(),
				aoiMgr.MinY+(y+1)*aoiMgr.gridLength())
		}
	}

	return aoiMgr
}

//得到每个格子在x轴方向的宽度
func (m *AOIManager) gridWidth() int {
	return (m.MaxX - m.MinX) / m.CountX
}

//得到每个格子在x轴方向的长度
func (m *AOIManager) gridLength() int {
	return (m.MaxY - m.MinY) / m.CountY
}

//打印信息方法
func (m *AOIManager) String() string {
	s := fmt.Sprintf("AOIManagr:\nminX:%d, maxX:%d, cntsX:%d, minY:%d, maxY:%d, cntsY:%d\n Grids in AOI Manager:\n",
		m.MinX, m.MaxX, m.CountX, m.MinY, m.MaxY, m.CountY)
	for _, grid := range m.Grids {
		s += fmt.Sprintln(grid)
	}

	return s
}

//根据格子的gID得到当前周边的九宫格信息
func (m *AOIManager) GetSurroundGridsByGid(gID int) (grids []*Grid) {
	//判断gID是否存在
	if _, ok := m.Grids[gID]; !ok {
		return
	}

	//将当前gid添加到九宫格中
	grids = append(grids, m.Grids[gID])

	// 根据gID, 得到格子所在的坐标
	x, y := gID%m.CountX, gID/m.CountX

	// 新建一个临时存储周围格子的数组
	surroundGid := make([]int, 0)

	// 新建8个方向向量: 左上: (-1, -1), 左中: (-1, 0), 左下: (-1,1), 中上: (0,-1), 中下: (0,1), 右上:(1, -1)
	// 右中: (1, 0), 右下: (1, 1), 分别将这8个方向的方向向量按顺序写入x, y的分量数组
	dx := []int{-1, -1, -1, 0, 0, 1, 1, 1}
	dy := []int{-1, 0, 1, -1, 1, -1, 0, 1}

	// 根据8个方向向量, 得到周围点的相对坐标, 挑选出没有越界的坐标, 将坐标转换为gid
	for i := 0; i < 8; i++ {
		newX := x + dx[i]
		newY := y + dy[i]

		if newX >= 0 && newX < m.CountX && newY >= 0 && newY < m.CountY {
			surroundGid = append(surroundGid, newY*m.CountX+newX)
		}
	}

	// 根据没有越界的gid, 得到格子信息
	for _, gid := range surroundGid {
		grids = append(grids, m.Grids[gid])
	}

	return
}

//通过横纵坐标获取对应的格子ID
func (m *AOIManager) GetGidByPos(x, y float32) int {
	gx := (int(x) - m.MinX) / m.gridWidth()
	gy := (int(y) - m.MinY) / m.gridLength()

	return gy*m.CountX + gx
}

//通过横纵坐标得到周边九宫格内的全部PlayerIds
func (m *AOIManager) GetPlayerIdsByPos(x, y float32) (playerIDs []uint32) {
	//根据横纵坐标得到当前坐标属于哪个格子ID
	gID := m.GetGidByPos(x, y)
	//根据格子ID得到周边九宫格的信息
	grids := m.GetSurroundGridsByGid(gID)
	for _, v := range grids {
		playerIDs = append(playerIDs, v.GetPlayerIds()...)
	}
	return
}

//通过GID获取当前格子的全部playerId
func (m *AOIManager) GetPlayerIdsByGid(gID int) (playerIds []uint32) {
	return m.Grids[gID].GetPlayerIds()
}

//移除一个格子中的PlayerID
func (m *AOIManager) RemovePlayerIdFromGrid(pID uint32, gID int) {
	m.Grids[gID].Remove(pID)
}

//添加一个PlayerID到一个格子中
func (m *AOIManager) AddPlayerIdToGrid(pID uint32, gID int) {
	m.Grids[gID].Add(pID)
}

//通过横纵坐标添加一个Player到一个格子中
func (m *AOIManager) AddToGridByPos(pID uint32, x, y float32) {
	gID := m.GetGidByPos(x, y)
	grid := m.Grids[gID]
	grid.Add(pID)
}

//通过横纵坐标把一个Player从对应的格子中删除
func (m *AOIManager) RemoveFromGridByPos(pID uint32, x, y float32) {
	gID := m.GetGidByPos(x, y)
	grid := m.Grids[gID]
	grid.Remove(pID)
}
