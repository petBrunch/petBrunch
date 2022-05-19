package brunch.domain.comment;

import brunch.domain.TimeEntity;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Comment extends TimeEntity {

    @Id
    @GeneratedValue
    private Long id;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "comment_id")
    private List<BigComment> bigCommentList = new ArrayList<>();

    @Column(length = 1000)
    private String content;

    private boolean isDeleted;
}
