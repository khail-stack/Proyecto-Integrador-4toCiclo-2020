package com.example.integradormovil.models;

public class Pageable {

    private Integer offset;
    private Integer pageNumber;
    private Integer pageSize;
    private Boolean paged;
    private Boolean unpaged;

    public Integer getOffset() {
        return offset;
    }

    public void setOffset(Integer offset) {
        this.offset = offset;
    }

    public Integer getPageNumber() {
        return pageNumber;
    }

    public void setPageNumber(Integer pageNumber) {
        this.pageNumber = pageNumber;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public Boolean getPaged() {
        return paged;
    }

    public void setPaged(Boolean paged) {
        this.paged = paged;
    }

    public Boolean getUnpaged() {
        return unpaged;
    }

    public void setUnpaged(Boolean unpaged) {
        this.unpaged = unpaged;
    }

    @Override
    public String toString() {
        return "Pageable{" +
                "offset=" + offset +
                ", pageNumber=" + pageNumber +
                ", pageSize=" + pageSize +
                ", paged=" + paged +
                ", unpaged=" + unpaged +
                '}';
    }
}
